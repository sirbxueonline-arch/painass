import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { clinic } from "@/lib/clinic";
import { CheckCircle } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;
  return {
    title: t("checkup"),
    description: "Ağrı riski qiymətləndirilməsi üçün kompleks check-up paketləri.",
    openGraph: { title: `${t("checkup")} | ${clinicName}` },
  };
}

// DRAFT — paket məlumatlarını müştəridən alın
const packages = [
  {
    name: "Əsas Ağrı Check-up",
    price: "// TODO: qiymət müştəridən alınsın",
    items: [
      "Anestezioloq konsultasiyası",
      "Fiziki müayinə",
      "Ağrı qiymətləndirmə testi",
      "Müalicə planı tövsiyəsi",
    ],
    highlight: false,
  },
  {
    name: "Kompleks Ağrı Check-up",
    price: "// TODO: qiymət müştəridən alınsın",
    items: [
      "Anestezioloq konsultasiyası",
      "Fiziki müayinə",
      "Ağrı qiymətləndirmə testi",
      "Ultrasəs müayinəsi (lazım olduqda)",
      "Müalicə planı tövsiyəsi",
      "Növbəti vizit planlaması",
    ],
    highlight: true,
  },
];

function CheckupContent() {
  const t = useTranslations("nav");

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="pt-28 pb-16 bg-[#f5f3ef]">
          <div className="container-site">
            <Breadcrumbs items={[{ label: "Ana Səhifə", href: "/" }, { label: t("checkup") }]} />
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1816] mt-4 mb-3">
              Check-up Paketləri
            </h1>
            <p className="text-lg text-[#6b6460] max-w-2xl">
              {/* DRAFT — Dr. Yusifov ilə nəzərdən keçirin */}
              Ağrı riskini erkən aşkar etmək, sağlam yaşam üçün ən vacib addımdır.
            </p>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container-site">
            <div className="bg-[#fdf0eb] rounded-xl p-4 mb-10 text-sm text-[#c96a3e] max-w-3xl">
              DRAFT — Paket məzmunu, qiymətləri və şərtlərini müştəridən alıb tamamlayın
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl border p-6 ${
                    pkg.highlight
                      ? "border-[#0b6b7a] bg-[#e8f4f6]"
                      : "border-[#e8e4de] bg-[#faf9f7]"
                  }`}
                >
                  {pkg.highlight && (
                    <span className="inline-block text-xs font-semibold bg-[#0b6b7a] text-white px-3 py-1 rounded-full mb-3">
                      Tövsiyə edilir
                    </span>
                  )}
                  <h3 className="font-serif text-xl text-[#1a1816] mb-2">{pkg.name}</h3>
                  <p className="text-sm text-[#8a8178] mb-4">{pkg.price}</p>
                  <ul className="space-y-2">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#4a4540]">
                        <CheckCircle className="h-4 w-4 text-[#0b6b7a] shrink-0 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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

export default function CheckupPage() {
  return <CheckupContent />;
}
