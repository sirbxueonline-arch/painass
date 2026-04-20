import { clinic } from "./clinic";

export function getMedicalClinicJsonLd(locale = "az") {
  const name =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${clinic.siteUrl}/${locale}`,
    name,
    alternateName: [clinic.nameAz, clinic.nameRu, clinic.nameEn],
    url: `${clinic.siteUrl}/${locale}`,
    telephone: [clinic.phones.landlineFormatted, clinic.phones.mobileFormatted],
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.district,
      postalCode: clinic.address.postalCode,
      addressCountry: "AZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.coordinates.lat,
      longitude: clinic.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    medicalSpecialty: "Anesthesiology",
    availableService: [
      { "@type": "MedicalTherapy", name: "Regional Anaesthesia" },
      { "@type": "MedicalTherapy", name: "Radiofrequency Ablation" },
      { "@type": "MedicalTherapy", name: "Epidural Injections" },
      { "@type": "MedicalTherapy", name: "Nerve Blocks" },
    ],
    sameAs: [
      clinic.socials.instagram,
      clinic.socials.facebook,
      clinic.socials.threads,
    ].filter(Boolean),
  };
}

export function getPhysicianJsonLd(doctor: {
  name: string;
  titleEn: string;
  specialties: string[];
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${clinic.siteUrl}/az/hekimlerimiz/${doctor.slug}`,
    name: doctor.name,
    jobTitle: doctor.titleEn,
    medicalSpecialty: doctor.specialties,
    worksFor: {
      "@type": "MedicalClinic",
      name: clinic.nameEn,
      url: clinic.siteUrl,
    },
  };
}

export function getMedicalProcedureJsonLd(service: {
  titleEn: string;
  summaryEn: string;
  slug: string;
}) {
  const cleanSummary = service.summaryEn
    .replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "")
    .trim();

  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${clinic.siteUrl}/az/xidmetler/${service.slug}`,
    name: service.titleEn,
    description: cleanSummary,
    performer: {
      "@type": "MedicalClinic",
      name: clinic.nameEn,
      url: clinic.siteUrl,
    },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getArticleJsonLd(article: {
  titleAz: string;
  summaryAz: string;
  publishedAt: string;
  slug: string;
}) {
  const cleanTitle = article.titleAz
    .replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "")
    .trim();
  const cleanSummary = article.summaryAz
    .replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "")
    .trim();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${clinic.siteUrl}/az/bloq/${article.slug}`,
    headline: cleanTitle,
    description: cleanSummary,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: clinic.nameAz,
      url: clinic.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: clinic.nameAz,
      url: clinic.siteUrl,
    },
  };
}
