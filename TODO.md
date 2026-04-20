# TODO — Client Confirmation Items

Items that must be confirmed or supplied by the client before launch.

## 🔴 Blockers (required before launch)

| # | Item | Location |
|---|------|----------|
| 1 | Clinic email address (`info@pain.az` — confirm this is correct) | `lib/clinic.ts` · `.env.example` |
| 2 | Facebook page URL (confirm `https://facebook.com/bakiagriklinikasi`) | `lib/clinic.ts` |
| 3 | YouTube channel URL (not yet supplied) | `lib/clinic.ts` |
| 4 | Exact clinic GPS coordinates (verify map pin is correct: 40.3889, 49.8372) | `lib/clinic.ts` |
| 5 | Google Maps embed API key (replace `AIzaSyB-PLACEHOLDER` in `LocationMap.tsx`) | `components/sections/LocationMap.tsx` |
| 6 | Dr. Yusifov full biography | `lib/doctors.ts` |
| 7 | Dr. Yusifov high-res photo (save as `public/doctors/zulfugar-yusifov.jpg`) | `lib/doctors.ts` |
| 8 | Names and details of additional doctors (2 placeholder cards exist) | `lib/doctors.ts` |
| 9 | Exact opening hours (currently: Mon–Fri 09:00–18:00, Sat 09:00–14:00, Sun closed) | `lib/clinic.ts` |

## 🟡 Important (needed soon after launch)

| # | Item | Location |
|---|------|----------|
| 10 | Resend API key for form email sending | `.env` (see `.env.example`) |
| 11 | Form submission recipient email | `FORM_TO_EMAIL` in `.env` |
| 12 | Clinic interior photos (minimum 3) | `public/images/` |
| 13 | Check-up package prices and exact contents | `app/[locale]/check-up/page.tsx` |
| 14 | Upcoming event dates, registration links, programme PDFs | `app/[locale]/tedbirler/page.tsx` |
| 15 | Insurance companies accepted | `app/[locale]/xestelere/page.tsx` |
| 16 | Blog cover images for 3 articles | `public/images/blog-*.jpg` |
| 17 | Google Analytics / Plausible tracking ID | `.env` → `NEXT_PUBLIC_GA_MEASUREMENT_ID` |

## 🟢 Nice to have

| # | Item | Location |
|---|------|----------|
| 18 | Russian translation of all DRAFT medical copy | `messages/ru.json` + page content |
| 19 | English translation of all DRAFT medical copy | `messages/en.json` + page content |
| 20 | Real patient testimonials (with written consent) | `components/sections/TestimonialCarousel.tsx` |
| 21 | Doctor education history and publications | `lib/doctors.ts` |
| 22 | Privacy policy — full legal text (lawyer review) | `app/[locale]/mexfilik/page.tsx` |
| 23 | Terms of use — full legal text (lawyer review) | `app/[locale]/istifade-sertleri/page.tsx` |
| 24 | Hero section high-res clinic photo | `components/sections/HeroSection.tsx` |
| 25 | About page clinic interior photo | `components/sections/AboutStrip.tsx` |

## 📋 Technical items

| # | Item |
|---|------|
| 26 | Set `NEXT_PUBLIC_SITE_URL=https://pain.az` in Vercel environment |
| 27 | Verify Resend "from" address domain is verified (`noreply@pain.az`) |
| 28 | Add `public/favicon.ico` and `public/apple-touch-icon.png` |
| 29 | Add `public/og/default.png` (1200×630 branded OG image) |
| 30 | Run `pnpm build` before deploy to check for any build errors |
