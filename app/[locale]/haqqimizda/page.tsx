import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { clinic } from "@/lib/clinic";
import { CheckCircle, Award, Users, Building2 } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;
  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: { title: `${t("title")} | ${clinicName}` },
  };
}

const values = [
  { icon: CheckCircle, titleAz: "Dəqiqlik", descAz: "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Ultrasəs və fluoroskopiya bələdçiliyi ilə maksimum dəqiqqlik." },
  { icon: Users, titleAz: "Xəstə mərkəzli yanaşma", descAz: "// DRAFT — Hər xəstəyə fərdi, şəxsiləşdirilmiş müalicə planı hazırlanır." },
  { icon: Award, titleAz: "Peşəkarlıq", descAz: "// DRAFT — Beynəlxalq standartlara uyğun protokollar, davamlı tibbi təhsil." },
  { icon: Building2, titleAz: "Müasir infrastruktur", descAz: "// DRAFT — Steril prosedur otaqları, son texnologiya avadanlıq." },
];

function AboutContent() {
  const t = useTranslations("about");

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="pt-28 pb-16 bg-[#f5f3ef]">
          <div className="container-site">
            <Breadcrumbs items={[{ label: "Ana Səhifə", href: "/" }, { label: t("title") }]} />
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1816] mt-4 mb-3">
              {t("title")}
            </h1>
            <p className="text-lg text-[#6b6460] max-w-2xl">{t("subtitle")}</p>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container-site max-w-4xl">
            {/* Mission DRAFT */}
            <div className="bg-[#fdf0eb] rounded-xl p-4 mb-8 text-sm text-[#c96a3e]">
              DRAFT — Klinika rəhbərliyi ilə nəzərdən keçirilib tamamlanmalıdır
            </div>

            <div className="prose-clinical mb-12">
              <p className="text-xl text-[#4a4540] font-serif leading-relaxed">
                {/* DRAFT — Dr. Yusifov ilə nəzərdən keçirin */}
                Bakı Ağrı Klinikası Azərbaycanda ağrı menecmenti sahəsinin inkişafına töhfə vermək
                məqsədi ilə yaradılmışdır. Müasir girişimsəl prosedurlar, ultrasəs bələdçiliyi
                və radiofrequency texnologiyaları ilə xəstələrə ağrısız həyat keyfiyyəti
                təmin edirik.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
              {[
                { num: "10+", label: "il təcrübə" },
                { num: "5000+", label: "müalicə edilmiş xəstə" },
                { num: "12+", label: "xidmət növü" },
                { num: "3", label: "dil xidməti" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#f5f3ef] rounded-2xl p-5 text-center"
                >
                  <div className="font-serif text-3xl text-[#0b6b7a] mb-1">{stat.num}</div>
                  <div className="text-sm text-[#6b6460]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <h2 className="font-serif text-2xl text-[#1a1816] mb-6">Dəyərlərimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => {
                const Icon = v.icon;
                const cleanDesc = v.descAz.replace(/^\/\/ (DRAFT)[^:]*:\s*/i, "").trim();
                return (
                  <div key={v.titleAz} className="bg-[#faf9f7] rounded-2xl p-6 border border-[#e8e4de]">
                    <Icon className="h-6 w-6 text-[#0b6b7a] mb-3" aria-hidden="true" />
                    <h3 className="font-semibold text-[#1a1816] mb-2">{v.titleAz}</h3>
                    <p className="text-sm text-[#6b6460]">{cleanDesc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default function AboutPage() {
  return <AboutContent />;
}
