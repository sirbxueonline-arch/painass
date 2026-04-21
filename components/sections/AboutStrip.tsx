import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CheckCircle2, ArrowRight, Sparkles, Stethoscope, ScanSearch, HeartPulse, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: ScanSearch,   text: "Ultrasəs və fluoroskopiya bələdçiliyi ilə dəqiq prosedurlar" },
  { icon: HeartPulse,   text: "Multidissiplinar ağrı menecmenti protokolları" },
  { icon: Stethoscope,  text: "Hər xəstəyə fərdi müalicə planı" },
  { icon: ShieldCheck,  text: "Müasir avadanlıq, steril mühit" },
];

export function AboutStrip() {
  const t = useTranslations("about");

  return (
    <section className="relative py-28 bg-white overflow-hidden" aria-labelledby="about-heading">
      {/* Ambient background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,143,173,0.07) 0%, transparent 65%)", transform: "translate(20%, -30%)" }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

          {/* ── Left — layered editorial visual ─────────────────────── */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Background blob shape */}
              <div
                className="absolute inset-0 rounded-[48px] rotate-[-3deg]"
                style={{ background: "linear-gradient(145deg, #053844 0%, #0b6b7a 60%, #1a8fad 100%)" }}
                aria-hidden="true"
              />

              {/* Pattern overlay */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.06] rounded-[48px] rotate-[-3deg]"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="about-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#about-dots)" />
              </svg>

              {/* Center floating content card */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] rounded-3xl p-7"
                style={{
                  background: "white",
                  boxShadow: "0 40px 80px -30px rgba(5,56,68,0.4), 0 10px 30px -10px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #0b6b7a 0%, #1a8fad 100%)" }}
                  >
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-serif text-base font-semibold" style={{ color: "#053844" }}>
                      Ağrı menecmenti
                    </p>
                    <p className="text-xs" style={{ color: "#857d74" }}>Girişimsəl prosedurlar</p>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { n: "10+",   l: "il təcrübə", c: "#0b6b7a" },
                    { n: "5K+",   l: "xəstə",       c: "#1a8fad" },
                    { n: "12",    l: "xidmət",      c: "#2d7a59" },
                    { n: "3",     l: "dil",         c: "#d4603a" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-2xl p-3.5"
                      style={{ background: "#f9f8f6", border: `1px solid ${s.c}15` }}
                    >
                      <div className="font-serif text-2xl font-semibold" style={{ color: s.c }}>
                        {s.n}
                      </div>
                      <div className="text-[11px]" style={{ color: "#857d74" }}>{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial strip */}
                <div
                  className="rounded-2xl p-4 relative"
                  style={{ background: "linear-gradient(135deg, #f0fbfc 0%, #eaf5f0 100%)" }}
                >
                  <p
                    className="font-serif italic text-sm leading-relaxed"
                    style={{ color: "#46413b" }}
                  >
                    &ldquo;Uzun müddətdir əziyyət çəkdiyim bel ağrısından qurtuldum.&rdquo;
                  </p>
                  <p className="text-[11px] mt-2 font-semibold" style={{ color: "#0b6b7a" }}>
                    — X.M., xəstə
                  </p>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div
                className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#2d7a59", boxShadow: "0 0 8px #2d7a59" }}
                />
                <span className="text-xs font-medium" style={{ color: "#053844" }}>Bugün açıqdır</span>
              </div>

              {/* Floating badge bottom-left */}
              <div
                className="absolute bottom-8 left-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                style={{
                  background: "rgba(5,56,68,0.9)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(126,229,243,0.3)",
                }}
              >
                <ShieldCheck className="h-4 w-4" style={{ color: "#7ee5f3" }} />
                <span className="text-xs font-medium text-white/90">EFIC sertifikatlı</span>
              </div>
            </div>
          </div>

          {/* ── Right — text ─────────────────────────────────────────── */}
          <div className="order-1 lg:order-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(45,122,89,0.1)" }}
            >
              <Sparkles className="h-3.5 w-3.5" style={{ color: "#2d7a59" }} />
              <span
                className="text-xs font-semibold uppercase"
                style={{ color: "#2d7a59", letterSpacing: "0.1em" }}
              >
                Haqqımızda
              </span>
            </div>

            <h2
              id="about-heading"
              className="font-serif text-balance mb-5"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#1a1714",
              }}
            >
              Ağrı menecmentində{" "}
              <span style={{ fontStyle: "italic", color: "#2d7a59", fontWeight: 400 }}>
                elmi
              </span>{" "}
              yanaşma
            </h2>

            <p className="text-lg leading-relaxed mb-6" style={{ color: "#645e57" }}>
              {t("subtitle")}
            </p>

            <p className="leading-relaxed mb-8" style={{ color: "#46413b" }}>
              Bakı Ağrı Klinikası Azərbaycanda ağrı menecmenti sahəsində ixtisaslaşmış
              müəssisədir. Ultrasəs və fluoroskopiya bələdçiliyi ilə aparılan müasir
              girişimsəl prosedurlar həyat keyfiyyətini əhəmiyyətli dərəcədə yaxşılaşdırır.
            </p>

            {/* Highlights with colored icons */}
            <ul className="space-y-4 mb-10">
              {highlights.map(({ icon: Icon, text }, i) => {
                const colors = ["#0b6b7a", "#1a8fad", "#2d7a59", "#d4603a"];
                const c = colors[i % colors.length];
                return (
                  <li key={text} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${c}15` }}
                    >
                      <Icon className="h-4 w-4" style={{ color: c }} aria-hidden="true" />
                    </div>
                    <span className="text-sm leading-relaxed pt-1.5" style={{ color: "#46413b" }}>
                      {text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/haqqimizda"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm text-white transition-all hover:shadow-xl hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #0b6b7a 0%, #1a8fad 100%)",
                boxShadow: "0 10px 30px -10px rgba(11,107,122,0.5)",
              }}
            >
              {t("learnMore")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
