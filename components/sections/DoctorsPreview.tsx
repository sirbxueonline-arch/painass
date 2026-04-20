import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DoctorCard } from "@/components/site/DoctorCard";
import { Button } from "@/components/ui/button";
import { getFeaturedDoctors } from "@/lib/doctors";

export function DoctorsPreview() {
  const t = useTranslations("doctors");
  const locale = useLocale();
  const featured = getFeaturedDoctors();

  return (
    <section className="py-24 bg-[#f5f3ef]" aria-labelledby="doctors-heading">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium text-[#0b6b7a] mb-2 uppercase tracking-wider">
              Komanda
            </p>
            <h2
              id="doctors-heading"
              className="font-serif text-3xl md:text-4xl text-[#1a1816] text-balance"
            >
              {t("title")}
            </h2>
            <p className="text-[#6b6460] mt-2 max-w-xl">{t("subtitle")}</p>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <Link href="/hekimlerimiz">{t("viewAll")}</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
