# CONTENT.md — Draft Copy Tracker

All content marked `// DRAFT` or `// TODO: professional translation` must be reviewed
by the clinic's medical leadership and/or a professional translator before launch.

---

## 🏥 Home Page

| Section | Status | Location |
|---------|--------|----------|
| Hero headline (AZ) | ✅ OK — final | `messages/az.json` |
| Hero subheadline (AZ) | ✅ OK | `messages/az.json` |
| About strip body (AZ) | ⚠️ DRAFT | `components/sections/AboutStrip.tsx` |
| Stats (10+ years, 5000+ patients) | ⚠️ DRAFT — verify numbers | `components/sections/AboutStrip.tsx` |
| Testimonials (3 reviews) | ⚠️ DRAFT — need real patient reviews + consent | `components/sections/TestimonialCarousel.tsx` |

---

## 🩺 Services

All service summaries are marked DRAFT. Medical copy must be reviewed by **Dr. Yusifov**.

| Service | AZ | RU | EN |
|---------|----|----|-----|
| Regional anesteziya (ultrasəs) | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Fluoroskopiya prosedurları | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Sinir blokadaları | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Epidural inyeksiyalar | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Faset oynaq inyeksiyaları | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Radiofrequency ablasiya | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Trigger nöqtə inyeksiyaları | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Xroniki bel/boyun ağrısı | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Xərçəng ağrısı | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Baş ağrısı / Migren | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Neyropatik ağrı | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |
| Check-up paketləri | ⚠️ DRAFT | ⚠️ TODO | ⚠️ TODO |

### Service detail (ultrasas-regional-anesteziya) — detailed template
- "Bu nədir?" section: `// DRAFT`
- "Kimə uyğundur?" section: `// DRAFT`
- "Necə aparılır?" section: `// DRAFT`
- Duration: `// DRAFT`
- 3 FAQs: `// DRAFT`

All other service detail pages show the summary + a "content coming" placeholder.

---

## 👨‍⚕️ Doctors

| Field | Status |
|-------|--------|
| Dr. Yusifov biography (AZ) | ⚠️ DRAFT — get from client |
| Dr. Yusifov biography (RU) | ⚠️ TODO: professional translation |
| Dr. Yusifov biography (EN) | ⚠️ TODO: professional translation |
| Dr. Yusifov education history | ⚠️ TODO — get from client |
| Dr. Yusifov publications | ⚠️ TODO — get from client |
| 2nd doctor — all fields | ⚠️ TODO — get from client |
| 3rd doctor — all fields | ⚠️ TODO — get from client |

---

## 📝 Blog Articles (3 placeholders)

All 3 articles have a summary but no body text yet.

| Article | Status |
|---------|--------|
| Xroniki bel ağrısı (2024-11-15) | ⚠️ DRAFT — summary only, body needed |
| Radiofrequency ablasiya nədir (2024-10-28) | ⚠️ DRAFT — summary only, body needed |
| Migren müalicəsi (2024-10-05) | ⚠️ DRAFT — summary only, body needed |

---

## 📄 Static Pages

| Page | Status |
|------|--------|
| Haqqımızda — mission text | ⚠️ DRAFT |
| Haqqımızda — values descriptions | ⚠️ DRAFT |
| Haqqımızda — stats (10+, 5000+) | ⚠️ DRAFT — verify with client |
| Check-up — package contents | ⚠️ DRAFT — get from client |
| Check-up — prices | ⚠️ TODO — get from client |
| Tədbirlər — event dates/descriptions | ⚠️ TODO — get from client |
| Xəstələrə — FAQ answers | ⚠️ DRAFT |
| Xəstələrə — insurance section | ⚠️ TODO — get from client |
| Məxfilik siyasəti — full legal text | ⚠️ DRAFT — needs lawyer review |
| İstifadə şərtləri — full legal text | ⚠️ DRAFT — needs lawyer review |

---

## 🌍 Translations

All Russian and English content is machine-translatable from the Azerbaijani DRAFT,
but must be reviewed by a **professional medical translator** before launch.

Files to translate:
- `messages/ru.json` — UI strings (currently fine)
- `messages/en.json` — UI strings (currently fine)
- All `titleRu`, `summaryRu`, `bioRu`, etc. fields in `lib/services.ts`, `lib/doctors.ts`, `lib/blog.ts`
- All page-level Russian/English copy in `app/[locale]/**/*.tsx`

---

## ✅ How to mark content as reviewed

When medical leadership has approved a piece of copy:
1. Remove the `// DRAFT — Dr. Yusifov ilə nəzərdən keçirin:` prefix
2. Replace with the reviewed text
3. Update this file status from ⚠️ to ✅
