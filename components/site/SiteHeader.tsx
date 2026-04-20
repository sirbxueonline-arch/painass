"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { PhoneLink } from "./PhoneLink";
import { clinic } from "@/lib/clinic";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";

export function SiteHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const navLinks = [
    { href: "/xidmetler" as const, label: t("services") },
    { href: "/hekimlerimiz" as const, label: t("doctors") },
    { href: "/check-up" as const, label: t("checkup") },
    { href: "/haqqimizda" as const, label: t("about") },
    { href: "/bloq" as const, label: t("blog") },
    { href: "/elaqe" as const, label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e8e4de]"
          : "bg-transparent"
      )}
      role="banner"
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Logo locale={locale} />

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Əsas naviqasiya"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-[#4a4540] hover:text-[#0b6b7a] rounded-lg hover:bg-[#e8f4f6] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <PhoneLink
              number={clinic.phones.mobile}
              formatted={clinic.phones.mobileFormatted}
              className="text-sm text-[#4a4540]"
              showIcon
            />
            <LanguageSwitcher />
            <Button asChild size="sm">
              <Link href="/elaqe">{t("bookAppointment")}</Link>
            </Button>
          </div>

          {/* Mobile right */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher compact />
            <a
              href={`tel:${clinic.phones.mobile}`}
              className="p-2 text-[#0b6b7a] hover:bg-[#e8f4f6] rounded-lg transition-colors"
              aria-label="Zəng edin"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[#4a4540] hover:bg-[#f5f3ef] rounded-lg transition-colors"
              aria-label={menuOpen ? "Menyunu bağla" : "Menyunu aç"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden bg-white border-t border-[#e8e4de] overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="container-site py-4 flex flex-col gap-1" aria-label="Mobil naviqasiya">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-3 text-sm text-[#2e2b27] hover:text-[#0b6b7a] hover:bg-[#e8f4f6] rounded-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#f5f3ef] mt-2">
            <Button asChild className="w-full" size="default">
              <Link href="/elaqe" onClick={() => setMenuOpen(false)}>
                {t("bookAppointment")}
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
