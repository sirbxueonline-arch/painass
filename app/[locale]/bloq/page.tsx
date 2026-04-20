import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ArticleCard } from "@/components/site/ArticleCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { articles } from "@/lib/blog";
import { clinic } from "@/lib/clinic";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;
  return {
    title: t("blog"),
    description: "Ağrı menecmenti, müalicə üsulları və sağlamlıq haqqında peşəkar məqalələr.",
    openGraph: { title: `${t("blog")} | ${clinicName}` },
  };
}

function BlogContent() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="pt-28 pb-16 bg-[#f5f3ef]">
          <div className="container-site">
            <Breadcrumbs items={[{ label: "Ana Səhifə", href: "/" }, { label: t("blog") }]} />
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a1816] mt-4 mb-3">
              {t("blog")}
            </h1>
            <p className="text-lg text-[#6b6460] max-w-2xl">
              Ağrı menecmenti, müalicə üsulları və sağlam yaşam haqqında məqalələr.
            </p>
          </div>
        </div>

        <div className="py-16 bg-[#faf9f7]">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  locale={locale}
                  readMoreLabel={tCommon("readMore")}
                />
              ))}
            </div>
          </div>
        </div>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default function BlogPage() {
  return <BlogContent />;
}
