import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PhoneLink } from "@/components/site/PhoneLink";
import { clinic } from "@/lib/clinic";
import { ChevronRight, Phone, Clock, Sparkles } from "lucide-react";

interface CtaSectionProps {
  titleKey?: string;
  subtitleKey?: string;
}

export function CtaSection({ titleKey = "title", subtitleKey = "subtitle" }: CtaSectionProps) {
  const t = useTranslations("cta");

  return (
    <section
      className="relative py-28 overflow-hidden isolate"
      aria-labelledby="cta-heading"
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #042530 0%, #053844 30%, #0b6b7a 65%, #1a8fad 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at 15% 20%, rgba(20,179,204,0.22) 0%, transparent 55%),
              radial-gradient(ellipse 700px 500px at 85% 85%, rgba(212,96,58,0.18) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      {/* Dot grid */}
      <svg
        className="absolute inset-0 -z-10 w-full h-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="cta-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>

      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Sparkles className="h-3.5 w-3.5" style={{ color: "#7ee5f3" }} />
            <span
              className="text-xs font-semibold"
              style={{ color: "rgba(255,255,255,0.9)", letterSpacing: "0.12em" }}
            >
              QƏBUL ÜÇÜN
            </span>
          </div>

          {/* Headline */}
          <h2
            id="cta-heading"
            className="font-serif text-white mb-6 text-balance"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            {(() => {
              const text = t(titleKey as "title");
              const words = text.split(" ");
              return words.map((word, i) => {
                const isMiddle =
                  words.length >= 3 && i > 0 && i < words.length - 1;
                return (
                  <span
                    key={i}
                    style={
                      isMiddle
                        ? { fontStyle: "italic", color: "#7ee5f3", fontWeight: 400 }
                        : undefined
                    }
                  >
                    {word}
                    {i < words.length - 1 ? " " : ""}
                  </span>
                );
              });
            })()}
          </h2>

          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            {t(subtitleKey as "subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/elaqe"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm text-white transition-all hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #e07450 0%, #d4603a 60%, #b84d2a 100%)",
                boxShadow: "0 12px 40px -10px rgba(212,96,58,0.65), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)" }}
                aria-hidden="true"
              />
              <span className="relative">{t("button")}</span>
              <ChevronRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>

            <div
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div
                className="relative w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(126,229,243,0.15)" }}
              >
                <Phone className="h-4 w-4" style={{ color: "#7ee5f3" }} />
              </div>
              <div className="text-left">
                <p className="text-white/45 text-[10px] uppercase tracking-[0.14em]">{t("or")}</p>
                <PhoneLink
                  number={clinic.phones.mobile}
                  formatted={clinic.phones.mobileFormatted}
                  className="text-white font-numeric font-semibold text-sm"
                />
              </div>
            </div>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" style={{ color: "rgba(126,229,243,0.7)" }} />
              <span>Eyni gün cavab</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
            <span>Pulsuz konsultasiya</span>
            <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
            <span>Konfidensiallıq qorunur</span>
          </div>
        </div>
      </div>
    </section>
  );
}
