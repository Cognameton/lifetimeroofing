# Google Business Profile Draft — Lifetime Roofing & Services

Manual setup (API approval still pending for other profiles, and GBP verification is tied to a real Google account + Google's own identity check for the business — this has to be done by you or the owner directly, not automated). Steps below, using content from this file.

## Setup Steps
1. Go to business.google.com, sign in with the account that should own this listing (recommend using `lifetimerns@gmail.com` so the owner keeps direct control).
2. "Add your business" → enter the name and info from **Basic Info** below.
3. When asked about location, choose **service-area business** (no walk-in customers) and enter the service area from below — do not enter a public street address.
4. Paste the **Business Description** and select the **Services** and **Attributes** listed below.
5. Enter the **Hours**.
6. Upload the **Photos** listed below.
7. Complete Google's verification step (usually phone or postcard for a service-area business — follow whatever Google offers).

## Basic Info
- **Business name:** Lifetime Roofing & Services
- **Primary category:** Roofing Contractor
- **Additional category (optional):** General Contractor
- **Business type:** Service-area business — check "I deliver goods and services to my customers" and hide the street address (no public storefront)
- **Service area:** Olive Branch, MS + 60 mile radius (add Southaven, Hernando, Collierville, Germantown, Bartlett, Lakeland individually if the area picker supports city-by-city entry, then extend to the full radius)
- **Phone:** (901) 292-6207
- **Email:** lifetimerns@gmail.com (not public-facing on GBP, but keep on file for verification)
- **Website:** https://lifetimeroofingnservices.com (live)

## Business Description (750 char max)
> Lifetime Roofing & Services is a locally owned, licensed and insured roofing contractor based in Olive Branch, MS, serving homeowners within a 60-mile radius across North Mississippi and West Tennessee. With 25+ years of combined experience, we specialize in roof repairs, full replacements, shingle and metal roofing, leak detection, and storm damage restoration. Every roof inspection is free and no-obligation, with clear photos so you know exactly what's going on. We also help homeowners navigate insurance claims after hail, wind, or storm damage. Local, honest, and built to protect what matters most — your home.

## Services to List
- Roof Repair
- Roof Replacement
- Shingle Roofing Installation
- Metal Roofing Installation
- Roof Leak Repair
- Storm Damage Roof Repair
- Free Roof Inspection
- Insurance Claim Assistance

## Attributes to Enable
- Free estimates
- Onsite services
- Identifies as (only if true — confirm with owner): veteran-led, family-owned, etc.

## Photos to Upload
- Logo: `images/logo.png` (flat) as the profile logo
- Cover photo: one of the aerial roof shots (`images/roof-project-2.jpg` or `roof-project-3.jpg`)
- Additional: `images/roof-project-1.jpg`, remaining project photos as jobs are completed

## Hours
- Mon–Sat: 8:00 AM – 8:30 PM
- Sun: Closed

## Open Items — Need From Owner
- **Year business opened / founded** — GBP asks for this; "25+ years combined experience" (team experience) isn't the same as the company's founding date.
- Confirm no conflict with the unrelated parked domain `lifetimeroofingservices.com` before using it anywhere in listings.

## Post-Setup
- Verify via Google's mail/phone verification flow for service-area businesses
- Once verified and live, request the first few reviews from completed jobs
- Add real testimonials + `AggregateRating` schema to the website once reviews exist (site currently has none — no fabricated reviews were used)
