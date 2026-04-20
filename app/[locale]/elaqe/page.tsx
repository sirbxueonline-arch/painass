import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactForm } from "@/components/site/ContactForm";
import { LocationMap } from "@/components/sections/LocationMap";
import { PhoneLink } from "@/components/site/PhoneLink";
import { clinic } from "@/lib/clinic";
import { Mail, Clock } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;
  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: { title: `${t("title")} | ${clinicName}` },
  };
}

function ContactContent() {
  const t = useTranslations("contact");
  const locale = "az";

  const sundayLabel = clinic.hours.sunday;

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
            <p className="text-lg text-[#6b6460]">{t("subtitle")}</p>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form — 3/5 */}
              <div className="lg:col-span-3">
                <div className="bg-[#faf9f7] rounded-2xl p-6 md:p-8">
                  <h2 className="font-serif text-2xl text-[#1a1816] mb-6">
                    Qəbula yazılmaq üçün müraciət
                  </h2>
                  <ContactForm />
                </div>
              </div>

              {/* Info sidebar — 2/5 */}
              <div className="lg:col-span-2 space-y-6">
                {/* Phone */}
                <div className="bg-[#e8f4f6] rounded-2xl p-6">
                  <h3 className="font-semibold text-[#1a1816] mb-4">Bizimlə əlaqə</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-[#8a8178] mb-1">Zəng mərkəzi</p>
                      <PhoneLink
                        number={clinic.phones.landline}
                        formatted={clinic.phones.landlineFormatted}
                        className="text-[#1a1816] font-numeric font-medium"
                        showIcon
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[#8a8178] mb-1">Mobil</p>
                      <PhoneLink
                        number={clinic.phones.mobile}
                        formatted={clinic.phones.mobileFormatted}
                        className="text-[#1a1816] font-numeric font-medium"
                        showIcon
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-4 w-4 text-[#0b6b7a] shrink-0 mt-0.5" aria-hidden="true" />
                      <a
                        href={`mailto:${clinic.email}`}
                        className="text-[#1a1816] hover:text-[#0b6b7a] transition-colors text-sm break-all"
                      >
                        {clinic.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#f5f3ef] rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-[#0b6b7a]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#1a1816]">{t("hours")}</h3>
                  </div>
                  <dl className="space-y-2.5 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-[#6b6460]">{t("weekdays")}</dt>
                      <dd className="font-numeric font-medium text-[#1a1816]">
                        {clinic.hours.weekdays}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[#6b6460]">{t("saturday")}</dt>
                      <dd className="font-numeric font-medium text-[#1a1816]">
                        {clinic.hours.saturday}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[#6b6460]">{t("sunday")}</dt>
                      <dd className="text-[#c0392b] font-medium">{sundayLabel}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <h2 className="font-serif text-2xl text-[#1a1816] mb-6">Ünvan və yol</h2>
              <LocationMap />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default function ContactPage() {
  return <ContactContent />;
}
