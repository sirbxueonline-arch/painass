import { useLocale, useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Script from "next/script";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
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
  const t = useTranslations("nav");
  return (
    <section className="py-24 bg-[#faf9f7]" aria-labelledby="testimonials-heading">
      <div className="container-site">
        <div className="mb-10">
          <p className="text-sm font-medium text-[#0b6b7a] mb-2 uppercase tracking-wider">
            Rəylər
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl md:text-4xl text-[#1a1816]"
          >
            Xəstələrimiz nə deyir
          </h2>
        </div>
        <div className="max-w-2xl">
          <TestimonialCarousel locale={locale} />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const t = useTranslations("contact");
  return (
    <section className="py-24 bg-[#f5f3ef]" aria-labelledby="map-heading">
      <div className="container-site">
        <div className="mb-10">
          <p className="text-sm font-medium text-[#0b6b7a] mb-2 uppercase tracking-wider">
            Ünvan
          </p>
          <h2
            id="map-heading"
            className="font-serif text-3xl md:text-4xl text-[#1a1816]"
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
