import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { PhoneLink } from "./PhoneLink";
import { clinic } from "@/lib/clinic";
import { Instagram, Facebook, Youtube, MapPin, Clock, Mail } from "lucide-react";

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
    <footer
      className="text-[#b8c8cc]"
      role="contentinfo"
      style={{ background: "linear-gradient(180deg, #053844 0%, #042f39 100%)" }}
    >
      {/* Top accent line */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, #d4603a 0%, #0b6b7a 40%, #1a8fad 70%, #14b3cc 100%)" }}
        aria-hidden="true"
      />

      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo locale={locale} inverted />
            <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: "#7aa8b0" }}>
              {t("tagline")}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {clinic.socials.instagram && (
                <a
                  href={clinic.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
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
                  className="p-2.5 rounded-xl transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
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
                  className="p-2.5 rounded-xl transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5">{tNav("services")}</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/xidmetler/ultrasas-regional-anesteziya", label: "Regional anesteziya" },
                { href: "/xidmetler/sinir-blokadalari", label: "Sinir blokadaları" },
                { href: "/xidmetler/radiofrequency-ablasiya", label: "Radiofrequency ablasiya" },
                { href: "/xidmetler/epidural-inyeksiyalar", label: "Epidural inyeksiyalar" },
                { href: "/xidmetler/xroniki-bel-boyun-agrisi", label: "Bel/boyun ağrısı" },
                { href: "/xidmetler", label: "Bütün xidmətlər →" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href as "/xidmetler"}
                    className="transition-colors hover:text-white"
                    style={{ color: "#7aa8b0" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5">Klinika</h3>
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
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                    style={{ color: "#7aa8b0" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5">{tContact("title")}</h3>
            <address className="not-italic text-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#5dd8ec" }} aria-hidden="true" />
                <span style={{ color: "#7aa8b0" }}>
                  {clinic.address.street}<br />
                  {clinic.address.district}, {clinic.address.city}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#5dd8ec" }} aria-hidden="true" />
                <dl className="space-y-0.5 text-xs" style={{ color: "#7aa8b0" }}>
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
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" style={{ color: "#5dd8ec" }} aria-hidden="true" />
                <a
                  href={`mailto:${clinic.email}`}
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: "#7aa8b0" }}
                >
                  {clinic.email}
                </a>
              </div>
              <div className="space-y-1">
                <PhoneLink
                  number={clinic.phones.landline}
                  formatted={clinic.phones.landlineFormatted}
                  className="block text-sm text-[#b8c8cc] transition-colors hover:text-white"
                />
                <PhoneLink
                  number={clinic.phones.mobile}
                  formatted={clinic.phones.mobileFormatted}
                  className="block text-sm text-[#b8c8cc] transition-colors hover:text-white"
                />
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#4a6b72" }}
        >
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
