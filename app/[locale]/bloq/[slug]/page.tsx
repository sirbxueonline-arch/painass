import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { Badge } from "@/components/ui/badge";
import { articles, getArticleBySlug } from "@/lib/blog";
import { clinic } from "@/lib/clinic";
import { Calendar, Clock } from "lucide-react";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const title =
    locale === "ru" ? article.titleRu : locale === "en" ? article.titleEn : article.titleAz;
  const cleanTitle = title.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim();
  const summary =
    locale === "ru"
      ? article.summaryRu
      : locale === "en"
        ? article.summaryEn
        : article.summaryAz;
  const cleanSummary = summary.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim();
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;

  return {
    title: cleanTitle,
    description: cleanSummary,
    openGraph: {
      title: `${cleanTitle} | ${clinicName}`,
      description: cleanSummary,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

function ArticleContent({ slug }: { slug: string }) {
  const locale = useLocale();
  const tNav = useTranslations("nav");
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const title =
    locale === "ru" ? article.titleRu : locale === "en" ? article.titleEn : article.titleAz;
  const cleanTitle = title.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim();
  const summary =
    locale === "ru"
      ? article.summaryRu
      : locale === "en"
        ? article.summaryEn
        : article.summaryAz;
  const cleanSummary = summary.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim();

  const isDraft = title.startsWith("//") || summary.startsWith("//");

  const date = new Date(article.publishedAt).toLocaleDateString(
    locale === "ru" ? "ru-RU" : locale === "en" ? "en-GB" : "az-Latn-AZ",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="pt-28 pb-12 bg-[#f5f3ef]">
          <div className="container-site max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Ana Səhifə", href: "/" },
                { label: tNav("blog"), href: "/bloq" },
                { label: cleanTitle },
              ]}
            />
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {article.category && (
                <Badge variant="secondary">{article.category}</Badge>
              )}
              {isDraft && (
                <Badge variant="accent">DRAFT — tibbi nəzərdən keçirmə gözlənilir</Badge>
              )}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1816] mt-4 mb-4 text-balance">
              {cleanTitle}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#8a8178]">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                <time dateTime={article.publishedAt}>{date}</time>
              </span>
              {article.readingMinutes && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {article.readingMinutes} dəqiqəlik oxu
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container-site max-w-3xl">
            <div className="prose-clinical">
              <p className="text-xl text-[#4a4540] leading-relaxed mb-8 font-serif">
                {cleanSummary}
              </p>

              {/* DRAFT placeholder body */}
              <div className="bg-[#fdf0eb] rounded-2xl p-6 mb-8">
                <p className="text-sm text-[#c96a3e] font-medium mb-2">
                  DRAFT — Məqalənin əsas hissəsi
                </p>
                <p className="text-sm text-[#6b6460]">
                  {/* DRAFT — Dr. Yusifov ilə nəzərdən keçirin: Bu məqalənin tam mətnini hazırlayın */}
                  Bu məqalənin ətraflı mətni hazırlanmaqdadır. Tibbi redaktorla birgə nəzərdən
                  keçirilərək tamamlanacaqdır.
                </p>
              </div>

              <hr className="border-[#e8e4de] my-8" />
              <p className="text-sm text-[#8a8178]">
                <strong>Xəbərdarlıq:</strong> Bu məqalə yalnız məlumat məqsədilə hazırlanmışdır
                və tibbi məsləhəti əvəz etmir. Fərdi müalicə planı üçün həkiminizlə
                məsləhətləşin.
              </p>
            </div>
          </div>
        </div>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  return <ArticleContent slug={slug} />;
}
