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

Posts to **FormSubmit** → `banmart@gmail.com`. No account required.

**The first submission triggers a one-time confirmation email.** Click the link in it
once and the form is live permanently. Until then, submissions are not delivered.

Two things worth knowing:

1. The email address appears in the page source, so scrapers can read it. FormSubmit
   issues a hashed endpoint (`https://formsubmit.co/abc123…`) after activation — swap
   `site.formEmail` usage in `src/pages/contact.astro` for that hash to hide it.
2. Submissions pass through FormSubmit's servers. If that is not acceptable, swap the
   `action` for Netlify Forms, Formspree, or your own handler — the field names are
   standard and will carry over.

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
