import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { Faq } from "@/components/ui/faq";
import { clinic } from "@/lib/clinic";
import { ClipboardList, Clock, Stethoscope, HeartPulse } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;
  return {
    title: t("forPatients"),
    description: "Bakı Ağrı Klinikasına ilk ziyarətinizdən əvvəl bilməli olduğunuz hər şey.",
    openGraph: { title: `${t("forPatients")} | ${clinicName}` },
  };
}

// DRAFT — tibbi məzmunu Dr. Yusifov ilə nəzərdən keçirin
const faqs = [
  {
    question: "İlk vizitdə nə gətirməliyəm?",
    answer:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Şəxsiyyəti təsdiq edən sənəd, əvvəlki tibbi sənədlər (MRT, rentgen, qan analizləri), hazırda qəbul etdiyiniz dərmanların siyahısı.",
  },
  {
    question: "Ziyarətdən əvvəl bir şey yemək olar?",
    answer:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Sadə konsultasiya üçün xüsusi hazırlıq tələb olunmur. Prosedur nəzərdə tutulubsa, həkiminiz əvvəlcədən məlumat verəcəkdir.",
  },
  {
    question: "Prosedurdan sonra avtomobil sürə bilərəmmi?",
    answer:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Prosedura görə dəyişir. Sedativ verildiyi hallarda müstəqil idarəetmə tövsiyə edilmir. Dəfə həkiminizlə məsləhətləşin.",
  },
  {
    question: "Sığorta ilə ödəniş qəbul edilirmi?",
    answer:
      "// TODO: sığorta şirkətlərinin siyahısını müştəridən alın. Bu məlumat müştəri tərəfindən veriləcəkdir.",
  },
  {
    question: "Uşaqlar qəbul edilirmi?",
    answer:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Yaş məhdudiyyəti haqqında məlumat müştəridən alınmalıdır.",
  },
];

const infoCards = [
  {
    icon: ClipboardList,
    titleAz: "Vizitə hazırlıq",
    descAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Tibbi sənədlər, əvvəlki müalicə məlumatları, dərmanlara allergiya tarixçəsi.",
  },
  {
    icon: Clock,
    titleAz: "Ziyarət müddəti",
    descAz:
      "// DRAFT — İlk konsultasiya ≈ 30–45 dəqiqə, prosedurlar isə prosedura görə dəyişir.",
  },
  {
    icon: Stethoscope,
    titleAz: "Prosedurdan sonra",
    descAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Bərpa müddəti prosedurdan asılıdır. Fizioterapi tövsiyələri ayrıca veriləcəkdir.",
  },
  {
    icon: HeartPulse,
    titleAz: "Sığorta",
    descAz:
      "// TODO: qəbul edilən sığorta şirkətlərinin siyahısını müştəridən alın.",
  },
];

function ForPatientsContent() {
  const t = useTranslations("nav");

  const cleanFaqs = faqs.map((f) => ({
    question: f.question,
    answer: f.answer.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim(),
  }));

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="pt-28 pb-16 bg-[#f5f3ef]">
          <div className="container-site">
            <Breadcrumbs
              items={[{ label: "Ana Səhifə", href: "/" }, { label: t("forPatients") }]}
            />
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1816] mt-4 mb-3">
              Xəstələrə Məlumat
            </h1>
            <p className="text-lg text-[#6b6460] max-w-2xl">
              İlk ziyarətinizdən əvvəl bilməli olduğunuz hər şey.
            </p>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container-site max-w-4xl">
            <div className="bg-[#fdf0eb] rounded-xl p-4 mb-8 text-sm text-[#c96a3e]">
              DRAFT — Məzmunu Dr. Yusifov və klinika administratoru ilə nəzərdən keçirin
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
              {infoCards.map((card) => {
                const Icon = card.icon;
                const cleanDesc = card.descAz.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim();
                return (
                  <div key={card.titleAz} className="bg-[#faf9f7] border border-[#e8e4de] rounded-2xl p-6">
                    <Icon className="h-6 w-6 text-[#0b6b7a] mb-3" aria-hidden="true" />
                    <h3 className="font-semibold text-[#1a1816] mb-2">{card.titleAz}</h3>
                    <p className="text-sm text-[#6b6460]">{cleanDesc}</p>
                  </div>
                );
              })}
            </div>

            {/* FAQ */}
            <h2 className="font-serif text-2xl text-[#1a1816] mb-6">Tez-tez soruşulan suallar</h2>
            <Faq items={cleanFaqs} />
          </div>
        </div>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default function ForPatientsPage() {
  return <ForPatientsContent />;
}
