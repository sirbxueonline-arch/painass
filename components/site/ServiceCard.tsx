import { Link } from "@/i18n/navigation";
import { ArrowRight, Waves, Scan, Zap, Radio, Target, Activity, Heart, Brain, ClipboardList, Syringe, Bone } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Waves, Scan, Zap, Radio, Target, Activity, Heart, Brain, ClipboardList, Syringe, Bone,
};

// Rich accent palette — gradient-based for each card
const accentColors = [
  { from: "#0b6b7a", to: "#1a8fad", pale: "rgba(11,107,122,0.06)" },
  { from: "#1a8fad", to: "#14b3cc", pale: "rgba(26,143,173,0.06)" },
  { from: "#2d7a59", to: "#3a9b70", pale: "rgba(45,122,89,0.06)" },
  { from: "#d4603a", to: "#e07450", pale: "rgba(212,96,58,0.06)" },
  { from: "#14b3cc", to: "#5dd8ec", pale: "rgba(20,179,204,0.06)" },
  { from: "#0e8fa0", to: "#0b6b7a", pale: "rgba(14,143,160,0.06)" },
];

interface ServiceCardProps {
  service: Service;
  locale: string;
  learnMoreLabel: string;
  className?: string;
  colorIndex?: number;
}

export function ServiceCard({ service, locale, learnMoreLabel, className, colorIndex = 0 }: ServiceCardProps) {
  const title =
    locale === "ru" ? service.titleRu : locale === "en" ? service.titleEn : service.titleAz;
  const summary =
    locale === "ru" ? service.summaryRu : locale === "en" ? service.summaryEn : service.summaryAz;

  const cleanSummary = summary.startsWith("//")
    ? summary.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim()
    : summary;

  const Icon = iconMap[service.icon] ?? Activity;
  const accent = accentColors[colorIndex % accentColors.length];
  const number = String(colorIndex + 1).padStart(2, "0");

  return (
    <article
      className={cn(
        "group relative bg-white rounded-[20px] p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1",
        className
      )}
      style={{
        border: "1px solid rgba(230,225,217,0.8)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
      }}
    >
      {/* Hover gradient wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${accent.pale} 0%, transparent 70%)` }}
        aria-hidden="true"
      />

      {/* Hover shadow layer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px] pointer-events-none -z-10"
        style={{ boxShadow: `0 20px 50px -15px ${accent.from}33, 0 8px 20px -8px ${accent.from}22` }}
        aria-hidden="true"
      />

      {/* Number watermark */}
      <span
        className="absolute top-5 right-6 font-serif text-4xl font-light opacity-[0.08] transition-opacity group-hover:opacity-[0.18] pointer-events-none"
        style={{ color: accent.from }}
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Icon with gradient background */}
      <div className="relative mb-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:rotate-[-4deg]"
          style={{
            background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)`,
            boxShadow: `0 8px 20px -6px ${accent.from}66`,
          }}
        >
          <span style={{ color: "white" }} aria-hidden="true">
            <Icon className="h-6 w-6" />
          </span>
        </div>
      </div>

      <h3 className="font-serif text-xl mb-3 leading-snug relative" style={{ color: "#1a1714" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed mb-6 line-clamp-3 relative" style={{ color: "#645e57" }}>
        {cleanSummary}
      </p>

      <Link
        href={{ pathname: "/xidmetler/[slug]", params: { slug: service.slug } }}
        className="relative inline-flex items-center gap-2 text-sm font-semibold transition-all group/link"
        style={{ color: accent.from }}
        aria-label={`${learnMoreLabel}: ${title}`}
      >
        <span>{learnMoreLabel}</span>
        <span
          className="inline-flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 group-hover/link:w-9"
          style={{ background: accent.pale }}
        >
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}
