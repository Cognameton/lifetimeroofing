# Lifetime Roofing & Services

A multi-page static website for Lifetime Roofing & Services, a roofing contractor based in Olive Branch, MS serving a 60-mile radius across North Mississippi and West Tennessee.

**Production domain:** `lifetimeroofingnservices.com` (not yet registered)
**Phone:** (901) 292-6207
**Email:** lifetimerns@gmail.com
**Service Area:** 60 miles around Olive Branch, MS (Southaven, Hernando, Collierville, Germantown, Bartlett, Lakeland & more)

---

## Project Structure

```
lifetimeroofing/
├── index.html              # Homepage
├── about.html               # About / company story
├── services.html            # Full service list (repairs, replacement, leak detection, storm damage, insurance)
├── service-area.html        # Coverage area + map
├── gallery.html              # Project photos
├── contact.html              # Contact form + free inspection request
├── sitemap.xml
├── robots.txt
├── css/style.css
├── js/script.js
└── images/                   # Real business photos (logo + aerial roof shots)
```

No build step required — pure static HTML/CSS/JS.

---

## SEO Foundation

- Unique `<title>` and meta description per page, targeting service + location keywords
- `RoofingContractor` JSON-LD schema with `GeoCircle` service-area targeting (no fixed storefront address — this is a service-area business, matching how the Google Business Profile should also be configured)
- `FAQPage` schema on the homepage (common roofing/storm-damage questions)
- `Service` schema for each offering on services.html
- `BreadcrumbList` schema on every interior page
- `sitemap.xml` + `robots.txt`
- Open Graph + canonical URLs on every page
- All images self-hosted and compressed (no hotlinked stock photos)
- Mobile-first responsive layout, lazy-loaded below-fold images
- NAP (name/phone/email) consistent across every page footer and schema

**No fabricated content:** there are no customer testimonials or review ratings on this site — the business has no reviews yet. Add real testimonials/`AggregateRating` schema once the Google Business Profile is live and has real reviews.

## Post-Launch SEO Checklist

1. Register the domain and point DNS at hosting
2. Submit `sitemap.xml` to Google Search Console
3. Verify Bing Webmaster Tools
4. **Create the Google Business Profile** (service-area business, no public address) — this is the single highest-impact local SEO step
5. Once GBP has real reviews, add testimonials + `AggregateRating` schema back into the site
6. Keep NAP identical across the site, GBP, and any directory listings (Yelp, Apple Maps, Bing Places)

## Local Development

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000
