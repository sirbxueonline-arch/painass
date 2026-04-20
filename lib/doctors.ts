export interface Doctor {
  slug: string;
  name: string;
  titleAz: string;
  titleRu: string;
  titleEn: string;
  specialties: string[];
  bioAz: string;
  bioRu: string;
  bioEn: string;
  photo: string;
  education: string[];
  publications: string[];
  languages: string[];
  featured: boolean;
}

export const doctors: Doctor[] = [
  {
    slug: "zulfugar-yusifov",
    name: "Dr. Zülfüqar Yusifov",
    titleAz: "Ağrı təbabəti üzrə mütəxəssis / Anestezioloq",
    titleRu: "Специалист по боли / Анестезиолог",
    titleEn: "Pain Medicine Specialist / Anaesthesiologist",
    specialties: [
      "Regional anesteziya",
      "Girişimsəl ağrı prosedurları",
      "Ultrasəs bələdçiliyi",
      "Fluoroskopik müdaxilələr",
    ],
    bioAz:
      "// DRAFT — Tam bionı müştəridən alın. Dr. Yusifov Bakı Ağrı Klinikasının baş həkimi və təsisçisidir. Ağrı menecmenti sahəsindəki geniş təcrübəsi ilə tanınan mütəxəssisdir.",
    bioRu:
      "// TODO: professional translation — DRAFT: Получите полную биографию у клиента.",
    bioEn:
      "// TODO: professional translation — DRAFT: Get full biography from client. Dr. Yusifov is the founder and chief physician of Baku Pain Clinic.",
    photo: "/doctors/zulfugar-yusifov.jpg", // TODO: replace with high-res original
    education: [], // TODO: fill with client-provided data
    publications: [], // TODO: fill with client-provided data
    languages: ["Azərbaycan", "Türk", "İngilis", "Rus"],
    featured: true,
  },
  {
    slug: "placeholder-doctor-2",
    name: "Dr. [Ad Soyad]", // TODO: fill with real doctor
    titleAz: "Ağrı təbabəti üzrə mütəxəssis",
    titleRu: "Специалист по боли",
    titleEn: "Pain Medicine Specialist",
    specialties: [], // TODO: fill
    bioAz: "// DRAFT — Tibbi məlumatları müştəridən alın.",
    bioRu: "// TODO: professional translation",
    bioEn: "// TODO: professional translation",
    photo: "/doctors/placeholder.jpg",
    education: [],
    publications: [],
    languages: ["Azərbaycan", "Rus"],
    featured: false,
  },
  {
    slug: "placeholder-doctor-3",
    name: "Dr. [Ad Soyad]", // TODO: fill with real doctor
    titleAz: "Anestezioloq-reanimatoloq",
    titleRu: "Анестезиолог-реаниматолог",
    titleEn: "Anaesthesiologist-Intensivist",
    specialties: [], // TODO: fill
    bioAz: "// DRAFT — Tibbi məlumatları müştəridən alın.",
    bioRu: "// TODO: professional translation",
    bioEn: "// TODO: professional translation",
    photo: "/doctors/placeholder.jpg",
    education: [],
    publications: [],
    languages: ["Azərbaycan", "Rus"],
    featured: false,
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export function getFeaturedDoctors(): Doctor[] {
  return doctors.filter((d) => d.featured);
}
