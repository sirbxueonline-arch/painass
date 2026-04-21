import { useLocale, useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Script from "next/script";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ConditionsStrip } from "@/components/sections/ConditionsStrip";
import { DoctorsPreview } from "@/components/sections/DoctorsPreview";
import { AboutStrip } from "@/components/sections/AboutStrip";
import { CtaSection } from "@/components/sections/CtaSection";
import { getMedicalClinicJsonLd } from "@/lib/json-ld";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { LocationMap } from "@/components/sections/LocationMap";
import { clinic } from "@/lib/clinic";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;

  return {
    title: clinicName,
    description: t("subheadline"),
    alternates: {
      canonical: `/${locale}`,
      languages: { az: "/az", ru: "/ru", en: "/en", "x-default": "/az" },
    },
    openGraph: {
      title: clinicName,
      description: t("subheadline"),
      url: `/${locale}`,
    },
  };
}

function HomeContent() {
  const locale = useLocale();
  const jsonLd = getMedicalClinicJsonLd(locale);
  return (
    <>
      <Script
        id="json-ld-clinic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ConditionsStrip />
        <ServicesPreview />
        <AboutStrip />
        <DoctorsPreview />
        <TestimonialsSection locale={locale} />
        <ContactSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

function TestimonialsSection({ locale }: { locale: string }) {
  return (
    <section
      className="relative py-28 overflow-hidden"
      aria-labelledby="testimonials-heading"
      style={{ background: "linear-gradient(180deg, #f9f8f6 0%, #f0fbfc 100%)" }}
    >
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,143,173,0.08) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }}
        aria-hidden="true"
      />
      <div className="container-site relative">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(212,96,58,0.1)" }}
          >
            <span
              className="text-xs font-semibold uppercase"
              style={{ color: "#d4603a", letterSpacing: "0.1em" }}
            >
              Xəstə rəyləri
            </span>
          </div>
          <h2
            id="testimonials-heading"
            className="font-serif text-balance"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#1a1714",
            }}
          >
            Xəstələrimiz{" "}
            <span style={{ fontStyle: "italic", color: "#d4603a", fontWeight: 400 }}>
              nə deyir
            </span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <TestimonialCarousel locale={locale} />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const t = useTranslations("contact");
  return (
    <section
      className="relative py-28 overflow-hidden"
      aria-labelledby="map-heading"
      style={{ background: "#f3f1ed" }}
    >
      <div className="container-site relative">
        <div className="max-w-2xl mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(11,107,122,0.1)" }}
          >
            <span
              className="text-xs font-semibold uppercase"
              style={{ color: "#0b6b7a", letterSpacing: "0.1em" }}
            >
              Ünvan
            </span>
          </div>
          <h2
            id="map-heading"
            className="font-serif text-balance"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#1a1714",
            }}
          >
            {t("title")}
          </h2>
        </div>
        <LocationMap />
      </div>
    </section>
  );
}

export default function HomePage() {
  return <HomeContent />;
}
