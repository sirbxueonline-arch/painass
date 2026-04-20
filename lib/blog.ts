import type { ArticleCardData } from "@/components/site/ArticleCard";

export const articles: ArticleCardData[] = [
  {
    slug: "xroniki-bel-agrisi-sebepleri-muaricesi",
    titleAz: "Xroniki bel ağrısı: səbəbləri və müasir müalicə üsulları",
    titleRu: "// TODO: professional translation — Хроническая боль в спине: причины и современные методы лечения",
    titleEn: "// TODO: professional translation — Chronic back pain: causes and modern treatment approaches",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Bel ağrısı dünya əhalisinin böyük hissəsini əhatə edən problemdir. Bu yazıda xroniki bel ağrısının əsas səbəbləri və müasir girişimsəl müalicə üsulları haqqında məlumat veririk.",
    summaryRu: "// TODO: professional translation",
    summaryEn: "// TODO: professional translation",
    coverImage: "/images/blog-back-pain.jpg",
    publishedAt: "2024-11-15",
    readingMinutes: 6,
    category: "Xroniki ağrı",
  },
  {
    slug: "radiofrequency-ablasiya-nedir",
    titleAz: "Radiofrequency ablasiya (RFA) nədir? Xəstə üçün bələdçi",
    titleRu: "// TODO: professional translation — Радиочастотная абляция: руководство для пациентов",
    titleEn: "// TODO: professional translation — Radiofrequency ablation (RFA): a patient guide",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Radiofrequency ablasiya ağrı ötürən sinir liflərini istilik enerjisi ilə məhv edərək uzunmüddətli ağrı azalması təmin edir.",
    summaryRu: "// TODO: professional translation",
    summaryEn: "// TODO: professional translation",
    coverImage: "/images/blog-rfa.jpg",
    publishedAt: "2024-10-28",
    readingMinutes: 5,
    category: "Prosedurlar",
  },
  {
    slug: "migren-nevroloji-yanaşma",
    titleAz: "Miqren müalicəsində yeni yanaşmalar",
    titleRu: "// TODO: professional translation — Новые подходы к лечению мигрени",
    titleEn: "// TODO: professional translation — New approaches to migraine treatment",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Xroniki miqren xəstələri üçün profilaktik müalicə seçimləri, sinir blokadaları və Botox terapiyası haqqında.",
    summaryRu: "// TODO: professional translation",
    summaryEn: "// TODO: professional translation",
    coverImage: "/images/blog-migraine.jpg",
    publishedAt: "2024-10-05",
    readingMinutes: 7,
    category: "Baş ağrısı",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
