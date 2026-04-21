import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DoctorCard } from "@/components/site/DoctorCard";
import { ArrowRight, Users } from "lucide-react";
import { getFeaturedDoctors } from "@/lib/doctors";

export function DoctorsPreview() {
  const t = useTranslations("doctors");
  const locale = useLocale();
  const featured = getFeaturedDoctors();

  return (
    <section
      className="relative py-28 overflow-hidden"
      aria-labelledby="doctors-heading"
      style={{ background: "linear-gradient(180deg, #f3f1ed 0%, #f9f8f6 100%)" }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(11,107,122,0.08) 0%, transparent 70%)", transform: "translate(25%, -25%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,96,58,0.05) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(11,107,122,0.1)" }}
            >
              <Users className="h-3.5 w-3.5" style={{ color: "#0b6b7a" }} />
              <span
                className="text-xs font-semibold uppercase"
                style={{ color: "#0b6b7a", letterSpacing: "0.1em" }}
              >
                Komanda
              </span>
            </div>
            <h2
              id="doctors-heading"
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#1a1714",
              }}
            >
              Təcrübəli{" "}
              <span style={{ fontStyle: "italic", color: "#0b6b7a", fontWeight: 400 }}>
                həkimlər
              </span>{" "}
              komandamız
            </h2>
            <p className="mt-5 text-lg leading-relaxed max-w-xl" style={{ color: "#645e57" }}>
              {t("subtitle")}
            </p>
          </div>

          <Link
            href="/hekimlerimiz"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
