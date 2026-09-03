import { createHash } from "node:crypto";
import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { and, eq, inArray } from "drizzle-orm";
import { db } from "@/db";
import { translations } from "@/db/schema";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

const MAX_TEXTS = 400;
const BATCH_SIZE = 40;

const SYSTEM_PROMPT = `You translate website copy for ATC, a civil services (IAS/RAS) coaching institute in Jaipur, Rajasthan, from English into Hindi.

Rules:
- Return natural, formal Hindi as used in Indian education and government contexts.
- Keep exam names, institute names and abbreviations recognisable: IAS, RAS, UPSC, RPSC, PSI, NCERT, CSAT. Write them in Devanagari (आईएएस, आरएएस) when they appear inside a Hindi sentence.
- Never translate numbers, dates, prices, phone numbers, email addresses, URLs or file names — reproduce them exactly.
- Preserve any leading or trailing punctuation, arrows and emoji exactly as given.
- Translate the meaning, not word for word. Do not add or drop information.
- Return only the translations, never commentary.`;

function hash(text: string) {
  return createHash("sha256").update(text).digest("hex");
}

/** Ask Claude for one batch and return translations aligned to the input order. */
async function translateBatch(client: Anthropic, texts: string[]) {
  const numbered = texts.map((text, i) => `${i + 1}. ${text}`).join("\n");

  const response = await client.messages.create({
    model: "claude-opus-5",
    max_tokens: 16000,
    system: SYSTEM_PROMPT,
    output_config: { effort: "low" },
    messages: [
      {
        role: "user",
        content: `Translate each numbered line into Hindi. Reply with a JSON array of ${texts.length} strings, in the same order, and nothing else.\n\n${numbered}`,
      },
    ],
  });

  const text = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("");

  const match = text.match(/\[[\s\S]*\]/);
  if (!match) throw new Error("Model did not return a JSON array");

  const parsed = JSON.parse(match[0]) as unknown;
  if (!Array.isArray(parsed) || parsed.length !== texts.length) {
    throw new Error("Translation array length did not match the input");
  }

  return parsed.map((value) => (typeof value === "string" ? value : ""));
}

export async function POST(request: Request) {
  let body: { lang?: string; texts?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const lang = body.lang === "hi" ? "hi" : null;
  const texts = Array.isArray(body.texts)
    ? body.texts.filter((t): t is string => typeof t === "string" && t.trim().length > 0)
    : [];

  if (!lang) {
    return NextResponse.json({ ok: false, error: "Unsupported language" }, { status: 400 });
  }
  if (texts.length === 0) {
    return NextResponse.json({ ok: true, translations: [] });
  }
  if (texts.length > MAX_TEXTS) {
    return NextResponse.json(
      { ok: false, error: `At most ${MAX_TEXTS} strings per request` },
      { status: 413 },
    );
  }

  const hashes = texts.map(hash);
  const found = new Map<string, string>();

  // 1. Everything already translated once is served from Postgres, for free.
  try {
    const cached = await db
      .select()
      .from(translations)
      .where(and(eq(translations.lang, lang), inArray(translations.sourceHash, hashes)));

    for (const row of cached) found.set(row.sourceHash, row.translatedText);
  } catch (error) {
    console.error("[translate] cache lookup failed:", error);
  }

  const missingIdx = hashes
    .map((h, i) => (found.has(h) ? -1 : i))
    .filter((i) => i !== -1);

  // 2. Anything new goes to Claude, then straight into the cache.
  if (missingIdx.length > 0 && process.env.ANTHROPIC_API_KEY) {
    const client = new Anthropic();

    for (let start = 0; start < missingIdx.length; start += BATCH_SIZE) {
      const batchIdx = missingIdx.slice(start, start + BATCH_SIZE);
      const batchTexts = batchIdx.map((i) => texts[i]);

      try {
        const result = await translateBatch(client, batchTexts);

        const rows = batchIdx
          .map((i, n) => ({
            lang,
            sourceHash: hashes[i],
            sourceText: texts[i],
            translatedText: result[n],
          }))
          .filter((row) => row.translatedText);

        for (const row of rows) found.set(row.sourceHash, row.translatedText);

        if (rows.length > 0) {
          await db
            .insert(translations)
            .values(rows)
            .onConflictDoNothing({
              target: [translations.lang, translations.sourceHash],
            });
        }
      } catch (error) {
        // A failed batch leaves those strings in English rather than failing
        // the whole request — the rest of the page still switches.
        console.error("[translate] batch failed:", error);
      }
    }
  } else if (missingIdx.length > 0) {
    console.warn(
      `[translate] ANTHROPIC_API_KEY is not set — ${missingIdx.length} strings stay in English.`,
    );
  }

  return NextResponse.json({
    ok: true,
    translations: hashes.map((h) => found.get(h) ?? null),
  });
}
