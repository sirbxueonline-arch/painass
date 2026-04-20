import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Button } from "@/components/ui/button";
import { getFeaturedServices } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export function ServicesPreview() {
  const t = useTranslations("services");
  const locale = useLocale();
  const featured = getFeaturedServices().slice(0, 6);

  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-labelledby="services-heading"
      style={{ background: "linear-gradient(180deg, #f9f8f6 0%, #e6f6fb 100%)" }}
    >
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-1"
        style={{ background: "linear-gradient(90deg, #0b6b7a 0%, #1a8fad 50%, #14b3cc 100%)" }}
        aria-hidden="true"
      />

      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
              style={{ background: "rgba(26,143,173,0.12)", color: "#1a8fad", letterSpacing: "0.08em" }}
            >
              XİDMƏTLƏR
            </span>
            <h2
              id="services-heading"
              className="font-serif text-3xl md:text-4xl text-balance"
              style={{ color: "#1a1714" }}
            >
              {t("title")}
            </h2>
            <p className="mt-2 max-w-xl" style={{ color: "#645e57" }}>{t("subtitle")}</p>
          </div>
          <Link
            href="/xidmetler"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border shrink-0 transition-all hover:shadow-md"
            style={{ borderColor: "#1a8fad", color: "#1a8fad", background: "white" }}
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              locale={locale}
              learnMoreLabel={t("learnMore")}
              colorIndex={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
