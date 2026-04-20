import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PhoneLink } from "@/components/site/PhoneLink";
import { clinic } from "@/lib/clinic";
import { ChevronRight, Phone } from "lucide-react";

interface CtaSectionProps {
  titleKey?: string;
  subtitleKey?: string;
}

export function CtaSection({ titleKey = "title", subtitleKey = "subtitle" }: CtaSectionProps) {
  const t = useTranslations("cta");

  return (
    <section
      className="relative py-24 overflow-hidden"
      aria-labelledby="cta-heading"
      style={{ background: "linear-gradient(135deg, #053844 0%, #0b6b7a 50%, #1a8fad 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(20,179,204,0.2) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(11,107,122,0.4) 0%, transparent 70%)" }}
        />
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      <div className="container-site relative z-10 text-center">
        {/* Pill label */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold"
          style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", letterSpacing: "0.08em" }}
        >
          QƏBUl
        </div>

        <h2
          id="cta-heading"
          className="font-serif text-3xl md:text-4xl text-white mb-5 text-balance"
        >
          {t(titleKey as "title")}
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
          {t(subtitleKey as "subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <Link
            href="/elaqe"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: "#d4603a", boxShadow: "0 4px 24px rgba(212,96,58,0.45)" }}
          >
            {t("button")}
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          {/* Phone option */}
          <div
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <Phone className="h-4 w-4 text-white/70 shrink-0" aria-hidden="true" />
            <span className="text-white/60 text-sm">{t("or")}</span>
            <PhoneLink
              number={clinic.phones.mobile}
              formatted={clinic.phones.mobileFormatted}
              className="text-white font-numeric font-semibold text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
