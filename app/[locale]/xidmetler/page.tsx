import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { services } from "@/lib/services";
import { clinic } from "@/lib/clinic";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;

  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: { title: `${t("title")} | ${clinicName}` },
  };
}

function ServicesContent() {
  const t = useTranslations("services");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const interventional = services.filter((s) => s.category === "interventional");
  const painMgmt = services.filter((s) => s.category === "pain-management");
  const packages = services.filter((s) => s.category === "package");

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="pt-28 pb-16 bg-[#f5f3ef]">
          <div className="container-site">
            <Breadcrumbs
              items={[{ label: "Ana Səhifə", href: "/" }, { label: t("title") }]}
            />
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1816] mt-4 mb-3">
              {t("title")}
            </h1>
            <p className="text-lg text-[#6b6460] max-w-2xl">{t("subtitle")}</p>
          </div>
        </div>

        <div className="py-16 bg-[#faf9f7]">
          <div className="container-site space-y-16">
            {/* Interventional procedures */}
            <section aria-labelledby="interventional-heading">
              <h2
                id="interventional-heading"
                className="font-serif text-2xl text-[#1a1816] mb-6"
              >
                Girişimsəl prosedurlar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {interventional.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    locale={locale}
                    learnMoreLabel={t("learnMore")}
                  />
                ))}
              </div>
            </section>

            {/* Pain management */}
            <section aria-labelledby="pain-mgmt-heading">
              <h2 id="pain-mgmt-heading" className="font-serif text-2xl text-[#1a1816] mb-6">
                Ağrı menecmenti
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {painMgmt.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    locale={locale}
                    learnMoreLabel={t("learnMore")}
                  />
                ))}
              </div>
            </section>

            {/* Packages */}
            {packages.length > 0 && (
              <section aria-labelledby="packages-heading">
                <h2 id="packages-heading" className="font-serif text-2xl text-[#1a1816] mb-6">
                  Paketlər
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {packages.map((service) => (
                    <ServiceCard
                      key={service.slug}
                      service={service}
                      locale={locale}
                      learnMoreLabel={t("learnMore")}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default function ServicesPage() {
  return <ServicesContent />;
}
