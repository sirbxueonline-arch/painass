import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { Badge } from "@/components/ui/badge";
import { clinic } from "@/lib/clinic";
import { Calendar, MapPin, Users } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;
  return {
    title: t("events"),
    description: "Bakı Ağrı Klinikasının tədbirləri, kursları və konfransları.",
    openGraph: { title: `${t("events")} | ${clinicName}` },
  };
}

// DRAFT — tədbirlər müştəridən alınsın
const events = [
  {
    titleAz: "Ağrı Akademiyası — CME Kursu",
    dateAz: "// TODO: tarix müştəridən alınsın",
    locationAz: "Bakı, Azərbaycan",
    typeAz: "Kurs",
    descAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Ağrı menecmenti üzrə CME kreditli peşəkar kurs. Həkimlər və tibbi personalın iştirakı üçün nəzərdə tutulmuşdur.",
    upcoming: true,
  },
  {
    titleAz: "Regional Anesteziya Workshop",
    dateAz: "// TODO: tarix müştəridən alınsın",
    locationAz: "Bakı, Azərbaycan",
    typeAz: "Workshop",
    descAz:
      "// DRAFT: Ultrasəs bələdçiliyi ilə regional anesteziya texnikasını əhatə edən praktik workshop.",
    upcoming: false,
  },
];

function EventsContent() {
  const t = useTranslations("nav");

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="pt-28 pb-16 bg-[#f5f3ef]">
          <div className="container-site">
            <Breadcrumbs items={[{ label: "Ana Səhifə", href: "/" }, { label: t("events") }]} />
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1816] mt-4 mb-3">
              Tədbirlər və Akademik Fəaliyyət
            </h1>
            <p className="text-lg text-[#6b6460] max-w-2xl">
              Bakı Ağrı Klinikası Ağrı Akademiyası çərçivəsindəki kurslar, konfranslar və CME
              tədbirləri.
            </p>
          </div>
        </div>

        <div className="py-16 bg-[#faf9f7]">
          <div className="container-site max-w-4xl">
            <div className="bg-[#fdf0eb] rounded-xl p-4 mb-8 text-sm text-[#c96a3e]">
              DRAFT — Tədbir məlumatlarını (tarixi, qeydiyyat linkini, proqramı) müştəridən alın
            </div>

            <div className="space-y-5">
              {events.map((event) => {
                const cleanDesc = event.descAz.replace(/^\/\/ (DRAFT)[^:]*:\s*/i, "").trim();
                return (
                  <div
                    key={event.titleAz}
                    className="bg-white rounded-2xl border border-[#e8e4de] p-6"
                  >
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <Badge variant={event.upcoming ? "default" : "secondary"}>
                        {event.upcoming ? "Gələcək" : "Keçmiş"}
                      </Badge>
                      <Badge variant="outline">{event.typeAz}</Badge>
                    </div>
                    <h2 className="font-serif text-xl text-[#1a1816] mb-3">{event.titleAz}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-[#6b6460] mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[#0b6b7a]" aria-hidden="true" />
                        {event.dateAz}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#0b6b7a]" aria-hidden="true" />
                        {event.locationAz}
                      </span>
                    </div>
                    <p className="text-[#4a4540] text-sm leading-relaxed">{cleanDesc}</p>
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

export default function EventsPage() {
  return <EventsContent />;
}
