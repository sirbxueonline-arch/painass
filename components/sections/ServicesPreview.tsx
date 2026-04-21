import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ServiceCard } from "@/components/site/ServiceCard";
import { getFeaturedServices } from "@/lib/services";
import { ArrowRight, Sparkles } from "lucide-react";

export function ServicesPreview() {
  const t = useTranslations("services");
  const locale = useLocale();
  const featured = getFeaturedServices().slice(0, 6);

  return (
    <section
      className="relative py-28 overflow-hidden"
      aria-labelledby="services-heading"
      style={{ background: "#f9f8f6" }}
    >
      {/* Ambient background blobs */}
      <div
        className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full opacity-50 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,143,173,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 -right-40 w-[600px] h-[600px] rounded-full opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,122,89,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(26,143,173,0.1)" }}
            >
              <Sparkles className="h-3.5 w-3.5" style={{ color: "#1a8fad" }} aria-hidden="true" />
              <span
                className="text-xs font-semibold uppercase"
                style={{ color: "#1a8fad", letterSpacing: "0.1em" }}
              >
                Xidmətlərimiz
              </span>
            </div>
            <h2
              id="services-heading"
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#1a1714",
              }}
            >
              Müasir{" "}
              <span style={{ fontStyle: "italic", color: "#1a8fad", fontWeight: 400 }}>
                girişimsəl
              </span>{" "}
              ağrı müalicəsi
            </h2>
            <p className="mt-5 text-lg leading-relaxed max-w-xl" style={{ color: "#645e57" }}>
              {t("subtitle")}
            </p>
          </div>

          <Link
            href="/xidmetler"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all hover:gap-3 hover:shadow-lg shrink-0"
            style={{
              background: "white",
              border: "1px solid #e6e1d9",
              color: "#0b6b7a",
              boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
            }}
          >
            {t("viewAll")}
            <span
              className="inline-flex items-center justify-center w-6 h-6 rounded-full transition-all group-hover:w-8"
              style={{ background: "linear-gradient(135deg, #0b6b7a 0%, #1a8fad 100%)" }}
            >
              <ArrowRight className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            </span>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
