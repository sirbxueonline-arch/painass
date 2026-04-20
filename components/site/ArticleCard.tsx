import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ArticleCardData {
  slug: string;
  titleAz: string;
  titleRu: string;
  titleEn: string;
  summaryAz: string;
  summaryRu: string;
  summaryEn: string;
  coverImage?: string;
  publishedAt: string;
  readingMinutes?: number;
  category?: string;
}

interface ArticleCardProps {
  article: ArticleCardData;
  locale: string;
  readMoreLabel: string;
  className?: string;
}

export function ArticleCard({ article, locale, readMoreLabel, className }: ArticleCardProps) {
  const title =
    locale === "ru" ? article.titleRu : locale === "en" ? article.titleEn : article.titleAz;
  const summary =
    locale === "ru"
      ? article.summaryRu
      : locale === "en"
        ? article.summaryEn
        : article.summaryAz;

  const cleanSummary = summary.startsWith("//")
    ? summary.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim()
    : summary;

  const date = new Date(article.publishedAt).toLocaleDateString(
    locale === "ru" ? "ru-RU" : locale === "en" ? "en-GB" : "az-Latn-AZ",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <article
      className={cn(
        "group bg-white rounded-2xl border border-[#e8e4de] overflow-hidden hover:border-[#0b6b7a]/30 hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      {/* Cover image */}
      {article.coverImage && (
        <div className="relative h-48 bg-[#f5f3ef] overflow-hidden">
          <Image
            src={article.coverImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-5">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-[#8a8178] mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            <time dateTime={article.publishedAt}>{date}</time>
          </span>
          {article.readingMinutes && (
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {article.readingMinutes} dəq
            </span>
          )}
        </div>

        <h3 className="font-serif text-lg text-[#1a1816] leading-snug mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-[#6b6460] leading-relaxed mb-4 line-clamp-3">{cleanSummary}</p>

        <Link
          href={{ pathname: "/bloq/[slug]", params: { slug: article.slug } }}
          className="inline-flex items-center gap-1.5 text-sm text-[#0b6b7a] font-medium hover:gap-2.5 transition-all"
          aria-label={`${readMoreLabel}: ${title}`}
        >
          {readMoreLabel}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
