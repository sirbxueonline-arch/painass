"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PhoneLink } from "@/components/site/PhoneLink";
import { clinic } from "@/lib/clinic";
import {
  MapPin,
  Phone,
  ChevronRight,
  Waves,
  Zap,
  Star,
  ShieldCheck,
  Award,
  Clock,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Waves, label: "Ultrasəs bələdçiliyi" },
  { icon: Zap,   label: "Sinir blokadaları" },
];

const trustStats = [
  { n: "10+",    l: "il təcrübə" },
  { n: "5 000+", l: "xəstə" },
  { n: "4.9",    l: "★ reytinq" },
];

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden isolate"
      aria-labelledby="hero-heading"
    >
      {/* Base gradient mesh — multi-layer for depth */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(165deg, #042530 0%, #053844 35%, #0b6b7a 70%, #127d8f 100%)" }}
        />
        {/* Layered radial glows */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 900px 700px at 85% -10%, rgba(93,216,236,0.22) 0%, transparent 55%),
              radial-gradient(ellipse 700px 900px at 10% 110%, rgba(20,179,204,0.20) 0%, transparent 60%),
              radial-gradient(circle 500px at 50% 50%, rgba(11,107,122,0.15) 0%, transparent 70%)
            `,
          }}
        />
      </div>

      {/* Decorative SVG grid */}
      <svg
        className="absolute inset-0 -z-10 w-full h-full opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="container-site relative z-10 flex-1 flex items-center pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 w-full items-center">

          {/* ── Left — editorial copy ───────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-7"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <span
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full"
                  style={{ background: "#d4603a", color: "white" }}
                >
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                </span>
                <span className="text-white/85 text-xs font-medium tracking-wide">
                  {t("address")}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-white/55 text-xs">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5dd8ec", boxShadow: "0 0 8px #5dd8ec" }} />
                <span>Bugün açıqdır • 09:00 – 19:00</span>
              </div>
            </motion.div>

            {/* Headline — editorial scale with italicized emphasis */}
            <motion.h1
              id="hero-heading"
              className="text-white text-balance mb-7"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {(() => {
                const words = t("headline").split(" ");
                return words.map((word, i) => {
                  // Italicize middle word(s) for editorial emphasis
                  const isMiddle =
                    words.length >= 3 &&
                    i > 0 &&
                    i < words.length - 1;
                  return (
                    <span
                      key={i}
                      style={
                        isMiddle
                          ? { fontStyle: "italic", color: "#7ee5f3", fontWeight: 400 }
                          : undefined
                      }
                    >
                      {word}
                      {i < words.length - 1 ? " " : ""}
                    </span>
                  );
                });
              })()}
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            >
              {t("subheadline")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Link
                href="/elaqe"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #e07450 0%, #d4603a 60%, #b84d2a 100%)",
                  color: "#fff",
                  boxShadow: "0 10px 40px -10px rgba(212,96,58,0.65), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)" }}
                  aria-hidden="true"
                />
                <span className="relative">{t("ctaPrimary")}</span>
                <ChevronRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>

              <Link
                href="/xidmetler"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-sm text-white transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <span>{t("ctaSecondary")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12 group-hover:scale-110" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Trust stats inline */}
            <motion.div
              className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              {trustStats.map((s, i) => (
                <div key={s.l} className="flex items-baseline gap-2">
                  <span
                    className="font-serif text-2xl md:text-3xl font-semibold leading-none"
                    style={{ color: "#7ee5f3" }}
                  >
                    {s.n}
                  </span>
                  <span className="text-white/55 text-xs">{s.l}</span>
                  {i < trustStats.length - 1 && (
                    <span className="hidden sm:inline-block w-px h-4 bg-white/15 ml-6" aria-hidden="true" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Phone row with pulse */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <div
                className="relative w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(212,96,58,0.18)" }}
              >
                <Phone className="h-4 w-4" style={{ color: "#ffb69a" }} aria-hidden="true" />
                <span
                  className="absolute inset-0 rounded-full animate-ping opacity-40"
                  style={{ background: "rgba(212,96,58,0.35)", animationDuration: "2.5s" }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-white/45 text-[11px] uppercase tracking-[0.14em] mb-0.5">
                  24/7 Qaynar xətt
                </p>
                <PhoneLink
                  number={clinic.phones.mobile}
                  formatted={clinic.phones.mobileFormatted}
                  className="text-white font-numeric font-semibold text-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Right — layered visual cards ───────────────────────── */}
          <motion.div
            className="relative hidden lg:block h-[560px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            aria-hidden="true"
          >
            {/* Back card — today's schedule */}
            <div
              className="absolute top-0 right-0 w-[78%] rounded-3xl p-6 overflow-hidden"
              style={{
                background: "linear-gradient(140deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 20px 60px -20px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" style={{ color: "#7ee5f3" }} />
                  <span className="text-white/85 text-sm font-medium">Bu gün qəbul</span>
                </div>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: "rgba(126,229,243,0.15)", color: "#7ee5f3" }}
                >
                  AÇIQDIR
                </span>
              </div>
              <div className="space-y-2.5">
                {[
                  { t: "09:30", n: "Konsultasiya",   s: "available" },
                  { t: "11:00", n: "Sinir blokadası", s: "booked" },
                  { t: "14:30", n: "Konsultasiya",   s: "available" },
                  { t: "16:00", n: "RF Ablasiya",    s: "booked" },
                ].map((slot) => (
                  <div
                    key={slot.t}
                    className="flex items-center justify-between py-2 px-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-numeric text-white/90 text-sm font-semibold">{slot.t}</span>
                      <span className="text-white/55 text-xs">{slot.n}</span>
                    </div>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={
                        slot.s === "available"
                          ? { background: "rgba(93,216,236,0.15)", color: "#5dd8ec" }
                          : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }
                      }
                    >
                      {slot.s === "available" ? "boşdur" : "doludur"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle floating card — clinic brand */}
            <motion.div
              className="absolute top-[44%] left-0 w-[68%] rounded-3xl p-6"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f0fbfc 100%)",
                boxShadow: "0 30px 80px -30px rgba(0,0,0,0.5), 0 4px 16px -4px rgba(0,0,0,0.1)",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #0b6b7a 0%, #1a8fad 100%)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="8.5" y="2" width="3" height="16" rx="1.5" fill="white" />
                    <rect x="2" y="8.5" width="16" height="3" rx="1.5" fill="white" />
                  </svg>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3" style={{ fill: "#d4603a", color: "#d4603a" }} />
                  ))}
                </div>
              </div>
              <p
                className="font-semibold text-base mb-1"
                style={{ fontFamily: "var(--font-serif)", color: "#053844" }}
              >
                Bakı Ağrı Klinikası
              </p>
              <p className="text-xs mb-4" style={{ color: "#645e57" }}>
                Ağrı menecmenti mərkəzi
              </p>
              <div className="grid grid-cols-3 gap-2 pt-4 border-t" style={{ borderColor: "rgba(11,107,122,0.1)" }}>
                {[
                  { n: "10+", l: "il",     c: "#0b6b7a" },
                  { n: "5K+", l: "xəstə",  c: "#1a8fad" },
                  { n: "12",  l: "xidmət", c: "#2d7a59" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="font-serif font-semibold text-lg" style={{ color: s.c }}>
                      {s.n}
                    </div>
                    <div className="text-[10px]" style={{ color: "#857d74" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right floating certification badge */}
            <motion.div
              className="absolute bottom-10 right-0 rounded-2xl p-4 w-56"
              style={{
                background: "rgba(5,56,68,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(126,229,243,0.25)",
                boxShadow: "0 20px 50px -15px rgba(0,0,0,0.4)",
              }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="h-4 w-4" style={{ color: "#7ee5f3" }} />
                <span className="text-white/90 text-xs font-semibold">Sertifikatlaşdırılmış</span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="px-2 py-1 rounded-md" style={{ background: "rgba(126,229,243,0.12)", color: "#7ee5f3" }}>
                  EFIC üzvü
                </span>
                <span className="px-2 py-1 rounded-md" style={{ background: "rgba(126,229,243,0.12)", color: "#7ee5f3" }}>
                  WIP
                </span>
              </div>
            </motion.div>

            {/* Feature chip row */}
            <motion.div
              className="absolute bottom-0 left-2 flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(126,229,243,0.2)" }}
                  >
                    <Icon className="h-3 w-3" style={{ color: "#7ee5f3" }} />
                  </div>
                  <span className="text-white/80 text-xs whitespace-nowrap">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Trust bar — bottom strip */}
      <motion.div
        className="relative z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container-site py-5">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-3 text-white/45 text-xs">
            <span className="uppercase tracking-[0.16em] font-medium">Etibar olunan</span>
            {[
              { icon: ShieldCheck, label: "Sterilizasiya protokolları" },
              { icon: Award,       label: "Beynəlxalq sertifikatlar" },
              { icon: Clock,       label: "Eyni gün qəbul" },
              { icon: Star,        label: "4.9 xəstə reytinqi" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5" style={{ color: "rgba(126,229,243,0.75)" }} />
                <span className="whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Wave separator */}
      <div className="relative z-10" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{ marginBottom: "-1px" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L1440 80L1440 30C1260 65 1080 5 900 35C720 65 540 5 360 30C240 50 120 15 0 30Z"
            fill="#f9f8f6"
          />
        </svg>
      </div>
    </section>
  );
}
