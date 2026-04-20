import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { Faq } from "@/components/ui/faq";
import { Badge } from "@/components/ui/badge";
import { services, getServiceBySlug } from "@/lib/services";
import { clinic } from "@/lib/clinic";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title =
    locale === "ru"
      ? service.titleRu
      : locale === "en"
        ? service.titleEn
        : service.titleAz;
  const summary =
    locale === "ru"
      ? service.summaryRu
      : locale === "en"
        ? service.summaryEn
        : service.summaryAz;
  const cleanSummary = summary.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim();
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;

  return {
    title,
    description: cleanSummary,
    openGraph: { title: `${title} | ${clinicName}` },
  };
}

// Detailed content for the one fully fleshed-out example: ultrasound-guided regional anesthesia
const detailedContent: Record<
  string,
  {
    whatIsIt: { az: string; ru: string; en: string };
    whoIsItFor: { az: string; ru: string; en: string };
    howItWorks: { az: string; ru: string; en: string };
    duration: { az: string; ru: string; en: string };
    faqs: { az: { q: string; a: string }[]; ru: { q: string; a: string }[]; en: { q: string; a: string }[] };
  }
> = {
  "ultrasas-regional-anesteziya": {
    whatIsIt: {
      az: "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Ultrasəs bələdçiliyi ilə regional anesteziya, real-time görüntüləmə vasitəsilə sinir strukturlarının dəqiq yerinin müəyyən edilərək lokal anestezik inyeksiyasının aparılması prosedurudur.",
      ru: "// TODO: professional translation",
      en: "// TODO: professional translation",
    },
    whoIsItFor: {
      az: "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Əməliyyat ağrısını azaltmaq istəyən xəstələr, xroniki ağrı problemləri olan şəxslər, ümumi anesteziyaya alternativ axtaranlar.",
      ru: "// TODO: professional translation",
      en: "// TODO: professional translation",
    },
    howItWorks: {
      az: "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Həkim ultrasəs cihazı ilə sinir strukturunu ekranda görür, sonra iynəni dəqiq vəziyyətə yönəldir və lokal anestezik inyeksiya edir.",
      ru: "// TODO: professional translation",
      en: "// TODO: professional translation",
    },
    duration: {
      az: "Prosedur adətən 20–40 dəqiqə çəkir. // DRAFT — Dr. Yusifov ilə dəqiqləşdirin",
      ru: "// TODO: professional translation",
      en: "// TODO: professional translation",
    },
    faqs: {
      az: [
        {
          q: "Prosedur ağrılıdırmı?",
          a: "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Lokal anesteziya tətbiq edildiyi üçün prosedur ərzində minimal diskomfort olur.",
        },
        {
          q: "Nə qədər tez nəticə alınır?",
          a: "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Effekt adətən 15–30 dəqiqə ərzində başlayır.",
        },
        {
          q: "Nə qədər davam edir?",
          a: "// DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Prosedura, istifadə edilən materiallardan asılı olaraq dəyişir.",
        },
      ],
      ru: [
        { q: "// TODO: professional translation", a: "// TODO: professional translation" },
      ],
      en: [
        { q: "// TODO: professional translation", a: "// TODO: professional translation" },
      ],
    },
  },
};

function ServiceDetailContent({ slug }: { slug: string }) {
  const locale = useLocale();
  const t = useTranslations("services");
  const tNav = useTranslations("nav");
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const title =
    locale === "ru" ? service.titleRu : locale === "en" ? service.titleEn : service.titleAz;
  const summary =
    locale === "ru"
      ? service.summaryRu
      : locale === "en"
        ? service.summaryEn
        : service.summaryAz;
  const cleanSummary = summary.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim();

  const detail = detailedContent[slug];
  const isDraft = summary.startsWith("//");

  const faqs =
    detail?.faqs[locale as "az" | "ru" | "en"] ??
    detail?.faqs.az ??
    [];

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* Header */}
        <div className="pt-28 pb-16 bg-[#f5f3ef]">
          <div className="container-site max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Ana Səhifə", href: "/" },
                { label: t("title"), href: "/xidmetler" },
                { label: title },
              ]}
            />
            <div className="mt-4 flex flex-wrap gap-2 mb-4">
              <Badge variant={isDraft ? "accent" : "secondary"}>
                {isDraft ? "DRAFT — tibbi nəzərdən keçirmə gözlənilir" : "Aktiv xidmət"}
              </Badge>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1816] mt-2 text-balance">
              {title}
            </h1>
            <p className="text-lg text-[#6b6460] mt-4 max-w-2xl">{cleanSummary}</p>
          </div>
        </div>

        {/* Content */}
        <div className="py-16 bg-white">
          <div className="container-site max-w-4xl">
            {detail ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main content */}
                <div className="lg:col-span-2 prose-clinical">
                  {[
                    { heading: "Bu nədir?", content: detail.whatIsIt[locale as "az" | "ru" | "en"] ?? detail.whatIsIt.az },
                    { heading: "Kimə uyğundur?", content: detail.whoIsItFor[locale as "az" | "ru" | "en"] ?? detail.whoIsItFor.az },
                    { heading: "Necə aparılır?", content: detail.howItWorks[locale as "az" | "ru" | "en"] ?? detail.howItWorks.az },
                  ].map(({ heading, content }) => {
                    const cleanContent = content.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim();
                    return (
                      <section key={heading} className="mb-10">
                        <h2 className="font-serif text-2xl text-[#1a1816] mb-3">{heading}</h2>
                        <p className="text-[#4a4540]">{cleanContent}</p>
                      </section>
                    );
                  })}

                  {/* Duration */}
                  <div className="bg-[#e8f4f6] rounded-2xl p-5 flex items-start gap-3 mb-10">
                    <Clock className="h-5 w-5 text-[#0b6b7a] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-[#0b6b7a] text-sm mb-1">Müddət</p>
                      <p className="text-[#4a4540] text-sm">
                        {(detail.duration[locale as "az" | "ru" | "en"] ?? detail.duration.az)
                          .replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "")
                          .trim()}
                      </p>
                    </div>
                  </div>

                  {/* FAQs */}
                  {faqs.length > 0 && !faqs[0].q.startsWith("//") && (
                    <section>
                      <h2 className="font-serif text-2xl text-[#1a1816] mb-5">Tez-tez soruşulan suallar</h2>
                      <Faq items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
                    </section>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-5">
                  <div className="bg-[#f5f3ef] rounded-2xl p-5">
                    <h3 className="font-semibold text-[#1a1816] mb-3 text-sm">Niyə bu prosedur?</h3>
                    <ul className="space-y-2">
                      {[
                        "Minimal invaziv",
                        "Real-time görüntüləmə",
                        "Sürətli bərpa",
                        "Yüksək dəqiqlik",
                      ].map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm text-[#4a4540]">
                          <CheckCircle className="h-3.5 w-3.5 text-[#0b6b7a] shrink-0" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#fdf0eb] rounded-2xl p-5">
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-[#c96a3e] shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs font-semibold text-[#c96a3e]">Vacib məlumat</p>
                    </div>
                    <p className="text-xs text-[#6b6460] leading-relaxed">
                      {/* DRAFT — Dr. Yusifov ilə nəzərdən keçirin */}
                      Bu məlumat ümumi tanışlıq üçündür. Fərdi müalicə planı üçün həkiminizlə məsləhətləşin.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="prose-clinical">
                <p className="text-[#4a4540]">{cleanSummary}</p>
                <div className="mt-8 bg-[#fdf0eb] rounded-2xl p-6">
                  <p className="text-sm text-[#c96a3e] font-medium">
                    Bu xidmət üçün ətraflı məlumat hazırlanır.
                    {/* DRAFT — medical copy to be added by Dr. Yusifov */}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  return <ServiceDetailContent slug={slug} />;
}
