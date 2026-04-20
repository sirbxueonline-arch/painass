# Bakı Ağrı Klinikası — pain.az

Production-ready Next.js 15 website for **Bakı Ağrı Klinikası** (Baku Pain Clinic).

## Tech stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 with custom design tokens
- **i18n:** next-intl — Azerbaijani (default), Russian, English
- **Forms:** React Hook Form + Zod + server actions
- **Email:** Resend
- **Icons:** lucide-react
- **Fonts:** Instrument Serif (headings) + Geist Sans (body)
- **Animations:** Framer Motion
- **Deployment:** Vercel

---

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes (for email) | Get from resend.com |
| `FORM_TO_EMAIL` | Yes | Email to receive form submissions |
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://pain.az` in production |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics ID |

### 3. Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — it will redirect to `/az` (default locale).

### 4. Build for production

```bash
pnpm build
pnpm start
```

---

## Project structure

```
/app
  /[locale]          # Locale-prefixed routes (az/ru/en)
    /page.tsx        # Home page
    /xidmetler/      # Services
    /hekimlerimiz/   # Doctors
    /bloq/           # Blog
    /elaqe/          # Contact
    /haqqimizda/     # About
    /check-up/       # Check-up packages
    /tedbirler/      # Events
    /xestelere/      # For patients
    /mexfilik/       # Privacy policy
    /istifade-sertleri/ # Terms
  /og/route.tsx      # Dynamic OG image generation
  /actions/          # Server actions

/components
  /ui/               # Primitive UI components (Button, Input, etc.)
  /site/             # Site-level components (Header, Footer, Cards)
  /sections/         # Page section components (Hero, CTA, etc.)

/content             # (future) MDX content files

/i18n                # next-intl configuration and routing

/lib
  clinic.ts          # Clinic data (address, phones, hours, socials)
  services.ts        # Services data
  doctors.ts         # Doctors data
  blog.ts            # Blog articles data
  json-ld.ts         # JSON-LD structured data helpers
  utils.ts           # Utility functions
  contact-schema.ts  # Zod schema for contact form

/messages
  az.json            # Azerbaijani UI strings
  ru.json            # Russian UI strings
  en.json            # English UI strings
```

---

## How to add a doctor

1. Open `lib/doctors.ts`
2. Add a new entry to the `doctors` array following the existing structure
3. Add the doctor's photo to `public/doctors/[slug].jpg`
4. If `featured: true`, the doctor appears on the home page doctors preview

```ts
{
  slug: "new-doctor-slug",
  name: "Dr. Full Name",
  titleAz: "İxtisas",
  titleRu: "Специализация",
  titleEn: "Specialisation",
  specialties: ["Specialty 1", "Specialty 2"],
  bioAz: "Biography in Azerbaijani...",
  bioRu: "Биография на русском...",
  bioEn: "Biography in English...",
  photo: "/doctors/new-doctor-slug.jpg",
  education: ["Degree, Institution, Year"],
  publications: [],
  languages: ["Azərbaycan", "Rus"],
  featured: false,
}
```

---

## How to add a service

1. Open `lib/services.ts`
2. Add a new entry to the `services` array
3. (Optional) Add detailed content in `app/[locale]/xidmetler/[slug]/page.tsx` in the `detailedContent` map

---

## How to add a blog post

1. Open `lib/blog.ts`
2. Add a new entry to the `articles` array
3. Add the article body directly in `app/[locale]/bloq/[slug]/page.tsx` or convert to MDX

---

## Locales and routing

| Locale | Default | URL prefix | Example |
|--------|---------|------------|---------|
| Azerbaijani | ✅ | `/az` | `/az/xidmetler` |
| Russian | — | `/ru` | `/ru/uslugi` |
| English | — | `/en` | `/en/services` |

Localized slugs are configured in `i18n/routing.ts`.

UI strings live in `messages/{az,ru,en}.json`.

---

## Deployment to Vercel

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

**Required env vars in Vercel:**
```
RESEND_API_KEY=re_...
FORM_TO_EMAIL=info@pain.az
NEXT_PUBLIC_SITE_URL=https://pain.az
```

---

## Changing the default language

The default locale is `az`. To change it, update `defaultLocale` in `i18n/routing.ts`.

---

## Content that still needs updating

See **TODO.md** for all client-confirmation items and **CONTENT.md** for all DRAFT copy
that needs medical review.
