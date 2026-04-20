"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { PhoneLink } from "@/components/site/PhoneLink";
import { clinic } from "@/lib/clinic";
import { MapPin, Phone, ChevronRight, Waves, Zap, Radio } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Waves,  label: "Ultrasəs bələdçiliyi" },
  { icon: Zap,    label: "Sinir blokadaları" },
  { icon: Radio,  label: "RF Ablasiya" },
];

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-labelledby="hero-heading"
      style={{ background: "linear-gradient(160deg, #053844 0%, #0b6b7a 55%, #1a8fad 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,143,173,0.25) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(11,107,122,0.4) 0%, transparent 70%)" }} />
        {/* Grid dot pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container-site relative z-10 flex-1 flex items-center pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 w-full items-center">

          {/* Left — copy */}
          <div>
            {/* Address chip */}
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="h-3.5 w-3.5 text-[#5dd8ec]" aria-hidden="true" />
              <span className="text-white/80 text-xs">{t("address")}</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-white text-balance mb-6"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.1 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              {t("headline")}
            </motion.h1>

            <motion.p
              className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            >
              {t("subheadline")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            >
              {/* Primary CTA — coral accent */}
              <Link
                href="/elaqe"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "#d4603a", color: "#fff", boxShadow: "0 4px 24px rgba(212,96,58,0.4)" }}
              >
                {t("ctaPrimary")}
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {/* Ghost CTA */}
              <Link
                href="/xidmetler"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/25 text-white hover:bg-white/10 transition-all duration-200"
              >
                {t("ctaSecondary")}
              </Link>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,255,255,0.15)" }}>
                <Phone className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-white/50 text-xs mb-0.5">Qəbul üçün zəng edin</p>
                <PhoneLink
                  number={clinic.phones.mobile}
                  formatted={clinic.phones.mobileFormatted}
                  className="text-white font-numeric font-semibold text-base"
                />
              </div>
            </motion.div>
          </div>

          {/* Right — feature cards */}
          <motion.div
            className="hidden lg:flex flex-col gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            aria-hidden="true"
          >
            {/* Hero visual card */}
            <div className="rounded-2xl overflow-hidden relative"
              style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <div className="p-8 text-center">
                {/* Clinic logo large */}
                <div className="w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.2)" }}>
                  <svg width="36" height="36" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="8.5" y="2" width="3" height="16" rx="1.5" fill="white" />
                    <rect x="2" y="8.5" width="16" height="3" rx="1.5" fill="white" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                  Bakı Ağrı Klinikası
                </p>
                <p className="text-white/60 text-sm mt-1">Mirəli Seyidov 10C, Bakı</p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mt-7">
                  {[
                    { n: "10+", l: "il təcrübə" },
                    { n: "5 000+", l: "xəstə" },
                    { n: "12+", l: "xidmət" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl py-3 px-2"
                      style={{ background: "rgba(255,255,255,0.1)" }}>
                      <div className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-serif)" }}>{s.n}</div>
                      <div className="text-white/55 text-xs mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* TODO: replace with actual clinic photo */}
                <p className="text-white/25 text-xs mt-4 italic">Foto müştəridən alınacaq</p>
              </div>
            </div>

            {/* Feature chips */}
            <div className="grid grid-cols-3 gap-3">
              {features.map(({ icon: Icon, label }) => (
                <div key={label}
                  className="rounded-xl p-4 text-center flex flex-col items-center gap-2"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(93,216,236,0.2)" }}>
                    <Icon className="h-4 w-4" style={{ color: "#5dd8ec" }} aria-hidden="true" />
                  </div>
                  <span className="text-white/75 text-xs leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="w-full block" style={{ marginBottom: "-2px" }}>
          <path d="M0 60L1440 60L1440 20C1200 55 900 5 720 30C540 55 240 5 0 20Z"
            fill="#f9f8f6" />
        </svg>
      </div>
    </section>
  );
}
