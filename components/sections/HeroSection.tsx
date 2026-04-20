"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { PhoneLink } from "@/components/site/PhoneLink";
import { clinic } from "@/lib/clinic";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#faf9f7]"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#e8f4f6]/50 rounded-bl-[80px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#0b6b7a]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-center">
        {/* Left — copy */}
        <div>
          {/* Above-fold contact bar */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-[#6b6460]">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#0b6b7a] shrink-0" aria-hidden="true" />
              {t("address")}
            </span>
            <span className="hidden sm:block text-[#d4cfc7]" aria-hidden="true">·</span>
            <PhoneLink
              number={clinic.phones.mobile}
              formatted={clinic.phones.mobileFormatted}
              className="text-[#6b6460] font-numeric"
              showIcon
            />
          </div>

          <motion.h1
            id="hero-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1816] leading-[1.1] text-balance mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            className="text-lg text-[#6b6460] leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            {t("subheadline")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            <Button size="xl" asChild>
              <Link href="/elaqe">{t("ctaPrimary")}</Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="/xidmetler">{t("ctaSecondary")}</Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-[#e8e4de]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          >
            {[
              { label: "Ultrasəs", sub: "bələdçiliyi" },
              { label: "Fluoroskopiya", sub: "bələdçiliyi" },
              { label: "RF Ablasiya", sub: "müalicəsi" },
            ].map((badge) => (
              <div key={badge.label} className="text-center">
                <div className="text-sm font-semibold text-[#0b6b7a]">{badge.label}</div>
                <div className="text-xs text-[#8a8178]">{badge.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — clinic photo */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          aria-hidden="true"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#d0ecf0]">
            {/* TODO: replace with actual clinic photo — high-res from client */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-2xl bg-[#0b6b7a] flex items-center justify-center mx-auto mb-4">
                  <svg width="40" height="40" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="8.5" y="2" width="3" height="16" rx="1.5" fill="white" />
                    <rect x="2" y="8.5" width="16" height="3" rx="1.5" fill="white" />
                  </svg>
                </div>
                <p className="text-[#0b6b7a] font-medium text-sm">
                  Bakı Ağrı Klinikası
                </p>
                <p className="text-[#8a8178] text-xs mt-1">
                  Mirəli Seyidov 10C, Bakı
                </p>
                <p className="text-[#b0a99e] text-xs mt-4 italic">
                  {/* TODO: replace with high-res clinic photo from client */}
                  Foto: müştəridən alınacaq
                </p>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-[#e8e4de] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e8f4f6] flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-[#0b6b7a]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-[#8a8178]">Qəbula yazılın</p>
              <PhoneLink
                number={clinic.phones.mobile}
                formatted={clinic.phones.mobileFormatted}
                className="text-sm font-semibold text-[#1a1816] font-numeric"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
