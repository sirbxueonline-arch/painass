import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DoctorCard } from "@/components/site/DoctorCard";
import { ArrowRight } from "lucide-react";
import { getFeaturedDoctors } from "@/lib/doctors";

export function DoctorsPreview() {
  const t = useTranslations("doctors");
  const locale = useLocale();
  const featured = getFeaturedDoctors();

  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-labelledby="doctors-heading"
      style={{ background: "linear-gradient(180deg, #f3f1ed 0%, #f9f8f6 100%)" }}
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(11,107,122,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
              style={{ background: "rgba(11,107,122,0.1)", color: "#0b6b7a", letterSpacing: "0.08em" }}
            >
              KOMANDA
            </span>
            <h2
              id="doctors-heading"
              className="font-serif text-3xl md:text-4xl text-balance"
              style={{ color: "#1a1714" }}
            >
              {t("title")}
            </h2>
            <p className="mt-2 max-w-xl" style={{ color: "#645e57" }}>{t("subtitle")}</p>
          </div>
          <Link
            href="/hekimlerimiz"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border shrink-0 transition-all hover:shadow-md"
            style={{ borderColor: "#0b6b7a", color: "#0b6b7a", background: "white" }}
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((doctor) => (
            <DoctorCard
              key={doctor.slug}
              doctor={doctor}
              locale={locale}
              viewProfileLabel={t("viewProfile")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
