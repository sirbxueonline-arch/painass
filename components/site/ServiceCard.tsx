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

interface ServiceCardProps {
  service: Service;
  locale: string;
  learnMoreLabel: string;
  className?: string;
}

export function ServiceCard({ service, locale, learnMoreLabel, className }: ServiceCardProps) {
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

  return (
    <article
      className={cn(
        "group bg-white rounded-2xl border border-[#e8e4de] p-6 hover:border-[#0b6b7a]/30 hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="w-11 h-11 rounded-xl bg-[#e8f4f6] flex items-center justify-center mb-4 group-hover:bg-[#0b6b7a] transition-colors duration-300">
        <Icon className="h-5 w-5 text-[#0b6b7a] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
      </div>
      <h3 className="text-[#1a1816] font-serif text-lg mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-[#6b6460] leading-relaxed mb-4 line-clamp-3">{cleanSummary}</p>
      <Link
        href={{ pathname: "/xidmetler/[slug]", params: { slug: service.slug } }}
        className="inline-flex items-center gap-1.5 text-sm text-[#0b6b7a] font-medium hover:gap-2.5 transition-all"
        aria-label={`${learnMoreLabel}: ${title}`}
      >
        {learnMoreLabel}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
