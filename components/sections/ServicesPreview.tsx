import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Button } from "@/components/ui/button";
import { getFeaturedServices } from "@/lib/services";

export function ServicesPreview() {
  const t = useTranslations("services");
  const locale = useLocale();
  const featured = getFeaturedServices().slice(0, 6);

  return (
    <section className="py-24 bg-[#faf9f7]" aria-labelledby="services-heading">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium text-[#0b6b7a] mb-2 uppercase tracking-wider">
              Xidmətlər
            </p>
            <h2
              id="services-heading"
              className="font-serif text-3xl md:text-4xl text-[#1a1816] text-balance"
            >
              {t("title")}
            </h2>
            <p className="text-[#6b6460] mt-2 max-w-xl">{t("subtitle")}</p>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <Link href="/xidmetler">{t("viewAll")}</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              locale={locale}
              learnMoreLabel={t("learnMore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
