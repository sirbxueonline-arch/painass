import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { PhoneLink } from "./PhoneLink";
import { clinic } from "@/lib/clinic";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function SiteFooter() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");
  const locale = useLocale();

  const year = new Date().getFullYear();

  const sundayLabel =
    locale === "ru"
      ? clinic.hours.sundayRu
      : locale === "en"
        ? clinic.hours.sundayEn
        : clinic.hours.sunday;

  return (
    <footer className="bg-[#1a1816] text-[#d4cfc7]" role="contentinfo">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo locale={locale} inverted />
            <p className="mt-4 text-sm text-[#8a8178] leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {clinic.socials.instagram && (
                <a
                  href={clinic.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {clinic.socials.facebook && (
                <a
                  href={clinic.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {clinic.socials.youtube && (
                <a
                  href={clinic.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">{tNav("services")}</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/xidmetler/ultrasəs-regional-anesteziya", label: "Regional anesteziya" },
                { href: "/xidmetler/sinir-blokadalari", label: "Sinir blokadaları" },
                { href: "/xidmetler/radiofrequency-ablasiya", label: "Radiofrequency ablasiya" },
                { href: "/xidmetler/epidural-inyeksiyalar", label: "Epidural inyeksiyalar" },
                { href: "/xidmetler/xroniki-bel-boyun-agrisi", label: "Bel/boyun ağrısı" },
                { href: "/xidmetler", label: tNav("services") + " →" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href as "/xidmetler"}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Klinika</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/haqqimizda" as const, label: tNav("about") },
                { href: "/hekimlerimiz" as const, label: tNav("doctors") },
                { href: "/check-up" as const, label: tNav("checkup") },
                { href: "/tedbirler" as const, label: tNav("events") },
                { href: "/xestelere" as const, label: tNav("forPatients") },
                { href: "/bloq" as const, label: tNav("blog") },
                { href: "/elaqe" as const, label: tNav("contact") },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">{tContact("title")}</h3>
            <address className="not-italic text-sm space-y-3 text-[#8a8178]">
              <p>
                {clinic.address.street}
                <br />
                {clinic.address.district}, {clinic.address.city}
              </p>
              <p>
                <PhoneLink
                  number={clinic.phones.landline}
                  formatted={clinic.phones.landlineFormatted}
                  className="text-[#d4cfc7] hover:text-white"
                />
                <br />
                <PhoneLink
                  number={clinic.phones.mobile}
                  formatted={clinic.phones.mobileFormatted}
                  className="text-[#d4cfc7] hover:text-white"
                />
              </p>
              <p>
                <a
                  href={`mailto:${clinic.email}`}
                  className="text-[#d4cfc7] hover:text-white transition-colors"
                >
                  {clinic.email}
                </a>
              </p>
            </address>

            <div className="mt-4 text-sm">
              <p className="text-white font-medium mb-1.5">{tContact("hours")}</p>
              <dl className="space-y-1 text-[#8a8178]">
                <div className="flex gap-2">
                  <dt>{tContact("weekdays")}:</dt>
                  <dd className="font-numeric">{clinic.hours.weekdays}</dd>
                </div>
                <div className="flex gap-2">
                  <dt>{tContact("saturday")}:</dt>
                  <dd className="font-numeric">{clinic.hours.saturday}</dd>
                </div>
                <div className="flex gap-2">
                  <dt>{tContact("sunday")}:</dt>
                  <dd>{sundayLabel}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b6460]">
          <p>
            © {year} {clinic.nameAz}. {t("rights")}.
          </p>
          <div className="flex gap-4">
            <Link href="/mexfilik" className="hover:text-white transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/istifade-sertleri" className="hover:text-white transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
