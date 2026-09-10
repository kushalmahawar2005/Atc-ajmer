# Apply confirmed course fees

The 9 September 2026 ATC screenshots confirm these GST-inclusive fees:

| Plan | Fee | One-time payment | Duration |
| --- | ---: | ---: | --- |
| IAS GS classroom | ₹1,45,000 | ₹1,30,000 | 18 months |
| IAS GS online live | ₹1,25,000 | Not specified | 18 months |
| IAS–RAS integrated classroom | ₹2,10,000 | ₹1,85,000 | 3 years |
| IAS–RAS integrated online live | ₹1,50,000 | Not specified | 3 years |
| RAS classroom | ₹95,000 | ₹85,000 | 18 months |

Preview the targeted update against the database configured in `.env.local`:

```sh
npx tsx --env-file=.env.local scripts/update-course-fees.ts
```

Apply the confirmed update:

```sh
npx tsx --env-file=.env.local scripts/update-course-fees.ts --apply
```

The script changes only fees, one-time payment and the GST/duration note for matching plans. It updates integrated plans wherever they occur on IAS, RAS and integrated course pages. It retains plan IDs, titles, descriptions, visibility and sorting. Missing plans are reported and skipped; ambiguous duplicate matches abort the transaction. Repeated runs with unchanged data do nothing. Unspecified RAS online fees and other course/test-series fees are untouched.

Updated seed values support a fresh installation; do not run the destructive seed on an existing database to apply this update. The public fee cards use database values when available, preserving future admin edits. Only connection/query failure uses the confirmed fee fallback; a deliberately empty list stays empty.

Applied to the configured local database on 10 September 2026: nine matching plan entries updated. Production requires its own targeted update during deployment. Rebuild the site after applying fees so statically rendered course pages show the updated values.
