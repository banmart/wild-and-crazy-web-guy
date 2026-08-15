# Wild & Crazy SEO — Steve Martin

Astro site for Steve Martin, small business SEO consultant. Comedy-club playbill theme.

```bash
npm run dev      # localhost:4321
npm run build    # static output to dist/
npm run preview
```

## Structure

| Path | What |
|---|---|
| `src/data/site.ts` | **All copy and jokes.** Tiers, services, testimonials, FAQ, contact. |
| `src/content/blog/` | Blog posts. Drop in a `.md` file — routing, sitemap and hub pick it up. |
| `src/styles/global.css` | Whole theme. Tokens at the top. |
| `src/layouts/BaseLayout.astro` | Meta, OG, favicons, schema, client scripts. |
| `src/components/` | TopBar, Footer, Marquee, TicketCard. |
| `src/assets/` | Source photos (WebP). Astro emits sized variants at build. |
| `scripts/generate-assets.mjs` | Regenerates favicons + OG image from the profile photo. |

## Assets

Run after replacing any photo in `src/assets`:

```bash
node scripts/generate-assets.mjs
```

Converts source photos to WebP, then builds `favicon.ico`, `favicon-16/32.png`,
`apple-touch-icon.png`, `icon-192/512.png`, and a composited 1200×630 `og-image.jpg`
from `steve-profile.webp`.

The OG image stays **JPEG** deliberately — several social crawlers still handle WebP
previews badly. Everything rendered on the site itself is WebP.

## Contact form

Powered by **Resend** via the serverless API endpoint at `/api/contact`.

### Environment Variables

Set the following in `.env` (locally) or in your deployment hosting dashboard (e.g. Vercel):

- `RESEND_API_KEY`: Your Resend API key (`re_...`).
- `RESEND_FROM_EMAIL`: Sender address. Default is `Wild & Crazy SEO <onboarding@resend.dev>` for testing. Once you verify your domain in Resend, switch to something like `Steve Martin <steve@stevemartinseo.com>`.
- `RESEND_TO_EMAIL`: Recipient inbox (e.g. `banmart@gmail.com`).

Successful submits redirect to `/thanks/`, which is `noindex` and excluded from the sitemap.


## SEO

Already wired:

- Per-page canonical, title, description, OG + Twitter cards with the branded image
- `ProfessionalService` + `Person` schema sitewide, `FAQPage` on the homepage,
  `OfferCatalog`/`Service` on services, `BlogPosting` + `BreadcrumbList` on posts
- `sitemap-index.xml` (auto), `robots.txt`, `llms.txt`, `site.webmanifest`
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) explicitly allowed
- `max-image-preview:large`, `theme-color`, full favicon set

Before launch:

- **Domain** — `SITE_URL` in `astro.config.mjs`, the `Sitemap:` line in `public/robots.txt`,
  the URLs in `public/llms.txt`, and `_next` in the contact form.
- **Placeholder content** — grep `PLACEHOLDER`. Pricing, testimonials, and two of the
  four stats are invented. Contact details and "since 1996" are real.

## Notes

- Zero framework JS. One ~50-line script in `BaseLayout.astro` handles marquee bulbs,
  scroll reveals, and the mobile nav. Reveals have a `<noscript>` fallback.
- All animation respects `prefers-reduced-motion`.
- Adding a page: drop a `.astro` file in `src/pages/`, use `BaseLayout`, add it to `nav`
  in `src/data/site.ts`.
