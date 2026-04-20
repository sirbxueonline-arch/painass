import { Link } from "@/i18n/navigation";
import { ArrowRight, Waves, Scan, Zap, Radio, Target, Activity, Heart, Brain, ClipboardList, Syringe, Bone } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Waves,
  Scan,
  Zap,
  Radio,
  Target,
  Activity,
  Heart,
  Brain,
  ClipboardList,
  Syringe,
  Bone,
};

// Cycle through brand accent colors for visual variety
const accentColors = [
  { bg: "rgba(11,107,122,0.1)", icon: "#0b6b7a", hover: "#0b6b7a", bar: "#0b6b7a" },
  { bg: "rgba(26,143,173,0.1)", icon: "#1a8fad", hover: "#1a8fad", bar: "#1a8fad" },
  { bg: "rgba(45,122,89,0.1)",  icon: "#2d7a59", hover: "#2d7a59", bar: "#2d7a59" },
  { bg: "rgba(212,96,58,0.1)",  icon: "#d4603a", hover: "#d4603a", bar: "#d4603a" },
  { bg: "rgba(20,179,204,0.1)", icon: "#14b3cc", hover: "#14b3cc", bar: "#14b3cc" },
  { bg: "rgba(11,107,122,0.1)", icon: "#0b6b7a", hover: "#0b6b7a", bar: "#0b6b7a" },
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

  const cleanSummary = summary.startsWith("//")
    ? summary.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim()
    : summary;

  const Icon = iconMap[service.icon] ?? Activity;
  const accent = accentColors[colorIndex % accentColors.length];

  return (
    <article
      className={cn(
        "group bg-white rounded-2xl border border-[#e6e1d9] p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden",
        className
      )}
      style={{ borderTopColor: accent.bar, borderTopWidth: "3px" }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
        style={{ background: accent.bg }}
      >
        <span style={{ color: accent.icon }} aria-hidden="true">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <h3 className="text-[#1a1714] font-serif text-lg mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-[#645e57] leading-relaxed mb-4 line-clamp-3">{cleanSummary}</p>

      <Link
        href={{ pathname: "/xidmetler/[slug]", params: { slug: service.slug } }}
        className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
        style={{ color: accent.icon }}
        aria-label={`${learnMoreLabel}: ${title}`}
      >
        {learnMoreLabel}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
