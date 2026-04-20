import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { DoctorCard } from "@/components/site/DoctorCard";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { doctors } from "@/lib/doctors";
import { clinic } from "@/lib/clinic";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "doctors" });
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;
  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: { title: `${t("title")} | ${clinicName}` },
  };
}

function DoctorsContent() {
  const t = useTranslations("doctors");
  const locale = useLocale();

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

        <div className="py-16 bg-[#faf9f7]">
          <div className="container-site">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.slug}
                  doctor={doctor}
                  locale={locale}
                  viewProfileLabel={t("viewProfile")}
                />
              ))}
            </div>
          </div>
        </div>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default function DoctorsPage() {
  return <DoctorsContent />;
}
