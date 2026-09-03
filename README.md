# Springboard Academy — Website

Next.js (App Router) rebuild of springboardindia.org, server-rendered and backed by
Postgres. Deployed to a Hostinger Node.js host behind Nginx.

## Stack

| Piece      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 16 (App Router, SSR)                   |
| Language   | TypeScript                                     |
| Styling    | Tailwind CSS v4 + brand tokens in `globals.css` |
| Database   | Postgres via Drizzle ORM + `pg`                 |
| Fonts      | Inter (UI) + Merriweather (headings)            |
| Deploy     | `output: "standalone"` + PM2 + Nginx reverse proxy |

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in DATABASE_URL
npm run db:push              # create tables
npm run db:seed              # optional demo data
npm run dev
```

Health check: `GET /api/health` returns `{ status: "ok", db: "up" }`.

## Scripts

| Script                 | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Dev server                                     |
| `npm run build`        | Production build (standalone)                  |
| `npm run start`        | Run the build locally                          |
| `npm run typecheck`    | `tsc --noEmit`                                 |
| `npm run lint`         | ESLint                                         |
| `npm run db:generate`  | Generate SQL migrations from the schema        |
| `npm run db:migrate`   | Apply migrations (use this in production)      |
| `npm run db:push`      | Push schema straight to the DB (dev only)      |
| `npm run db:studio`    | Drizzle Studio                                 |
| `npm run db:seed`      | Seed courses and batches                       |
| `npm run admin:create` | Create or update an admin account              |
| `npm run deploy:bundle`| Copy `.next/static` + `public` into standalone |

## Admin panel

Lives at `/admin`, outside the public site's layout group, and is excluded from
search engines. It manages every table the website reads.

| Screen                      | Manages                                                     |
| --------------------------- | ----------------------------------------------------------- |
| Dashboard                   | Row counts and the latest enquiries                         |
| Enquiries                   | Form submissions — qualify, mark handled, filter, export CSV |
| Test Series Registrations   | RAS / IAS / PSI banner sign-ups, per exam, export CSV        |
| Courses / Batches / Banners | Home page content                                            |
| Course Plans & Fees         | Every priced card on the course and test-series pages        |
| Testimonials                | Faculty and student quotes on the home page                   |
| Selections                  | Toppers gallery entries                                      |
| Study Material              | Downloadable PDFs                                            |
| Admin Users                 | Panel accounts (admin role only)                             |

Enquiries and registrations both support a date range, a sort direction and a
CSV export that carries the current filters through to the download.

Create the first account, then sign in at `/admin/login`:

```bash
npm run admin:create -- you@springboardindia.org 'a-strong-password' 'Your Name' admin
```

Passwords are scrypt hashes (`node:crypto`, no external dependency). The session
is a signed, httpOnly cookie scoped to `/admin` and valid for 8 hours; set
`ADMIN_SESSION_SECRET` per environment. `src/proxy.ts` redirects cookie-less
requests to the login page, and every page and server action calls
`requireAdmin()` before touching data.

## Database

Schema lives in `src/db/schema.ts`; the pooled client is `src/db/index.ts`.
Tables: `admin_users`, `enquiries`, `courses`, `banners`, `batches`,
`selections`, `study_materials`.

For local development, run Postgres in Docker:

```bash
docker run -d --name sba-postgres \
  -e POSTGRES_PASSWORD=sba_dev -e POSTGRES_USER=sba -e POSTGRES_DB=springboard \
  -p 5433:5432 postgres:17-alpine
```

Set `DATABASE_SSL=true` when the Postgres host requires TLS (most managed
Hostinger databases do).

## Deploying to Hostinger

Requires a plan with Node.js (VPS or Cloud). Shared hosting cannot run SSR.

```bash
# on the server
npm ci
npm run build
npm run deploy:bundle
npm run db:migrate
pm2 start ecosystem.config.js
pm2 save
```

PM2 serves the app on `127.0.0.1:3000`. Point Nginx at it:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

`.env.local` is not committed — create it on the server with the production
`DATABASE_URL` and `NEXT_PUBLIC_SITE_URL`.

## Language switching

The header's `EN | हिं` toggle flips the whole site. Fixed UI text (navigation,
buttons, headings, form labels) comes from a hand-written Hindi dictionary in
`src/lib/i18n/dictionary.ts`, so it switches instantly and costs nothing. Longer
page prose falls through to `POST /api/translate`, which translates with Claude
and caches every sentence in the `translations` table — each string is paid for
once, site-wide.

Set `ANTHROPIC_API_KEY` to enable that second half. Without it the chrome still
switches to Hindi and the prose stays English.

## PWA

`src/app/manifest.ts` serves the web manifest and `public/sw.js` is the service
worker, registered in production only by `ServiceWorker.tsx`. Navigations are
network-first with a cached fallback, static assets are stale-while-revalidate,
and `/admin` and `/api` are never cached. `/offline` is the fallback page.

## SEO

- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt`; `/admin`, `/api` and `/offline` are excluded.
- `src/lib/site.ts` holds the canonical URL and business details.
- JSON-LD: an `EducationalOrganization` + `LocalBusiness` + `WebSite` graph on
  the home page, and `BreadcrumbList` on every inner page via `PageShell`.
- Root metadata covers Open Graph, Twitter cards, keywords, canonicals and
  Google verification.

## Structure

```
src/
  app/            routes (App Router)
    api/health/   DB health check
  components/     layout / ui / home
  db/             schema, client, seed
  lib/            shared helpers
scripts/          deploy helpers
```
