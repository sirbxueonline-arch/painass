import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { PhoneLink } from "@/components/site/PhoneLink";
import { clinic } from "@/lib/clinic";

interface CtaSectionProps {
  titleKey?: string;
  subtitleKey?: string;
}

export function CtaSection({ titleKey = "title", subtitleKey = "subtitle" }: CtaSectionProps) {
  const t = useTranslations("cta");

  return (
    <section className="bg-[#0b6b7a] py-20" aria-labelledby="cta-heading">
      <div className="container-site text-center">
        <h2
          id="cta-heading"
          className="font-serif text-3xl md:text-4xl text-white mb-4 text-balance"
        >
          {t(titleKey as "title")}
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          {t(subtitleKey as "subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="accent" asChild>
            <Link href="/elaqe">{t("button")}</Link>
          </Button>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span>{t("or")}</span>
            <PhoneLink
              number={clinic.phones.mobile}
              formatted={clinic.phones.mobileFormatted}
              className="text-white font-numeric font-medium text-base"
              showIcon
            />
          </div>
        </div>
      </div>
    </section>
  );
}
