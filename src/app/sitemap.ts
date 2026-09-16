import { execFileSync } from "node:child_process";
import path from "node:path";
import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";

/** Pages whose content changes without the source file changing. */
const ALWAYS_FRESH = new Set(["/", "/daily-quiz"]);

/**
 * The commit date of the page's source file. Stamping every URL with the build
 * time — which is what a plain `new Date()` does — makes <lastmod> noise that
 * Google learns to ignore, so fall back to it only when git is unavailable
 * (for example when building from a source tarball rather than a checkout).
 */
function lastEdited(routePath: string, buildDate: Date): Date {
  if (ALWAYS_FRESH.has(routePath)) return buildDate;

  const file = path.join(
    process.cwd(),
    "src/app/(site)",
    routePath === "/" ? "" : routePath,
    "page.tsx",
  );

  try {
    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return iso ? new Date(iso) : buildDate;
  } catch {
    return buildDate;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: lastEdited(route.path, buildDate),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
