import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";

const highlights = [
  "Ultrasəs və fluoroskopiya bələdçiliyi ilə dəqiq prosedurlar",
  "Multidissiplinar ağrı menecmenti protokolları",
  "Hər xəstəyə fərdi müalicə planı",
  "Müasir avadanlıq, steril mühit",
];

const stats = [
  { num: "10+",   label: "il təcrübə", color: "#0b6b7a" },
  { num: "5000+", label: "xəstə",      color: "#1a8fad" },
  { num: "12",    label: "xidmət",     color: "#2d7a59" },
  { num: "3",     label: "dil",        color: "#d4603a" },
];

export function AboutStrip() {
  const t = useTranslations("about");

  return (
    <section className="py-24 bg-white" aria-labelledby="about-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual */}
          <div className="relative order-2 lg:order-1">
            {/* Corner accent */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl pointer-events-none"
              style={{ background: "rgba(11,107,122,0.08)" }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-xl pointer-events-none"
              style={{ background: "rgba(26,143,173,0.1)" }}
              aria-hidden="true"
            />

            <div
              className="rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #e0f6f9 0%, #e6f6fb 60%, #eaf5f0 100%)" }}
            >
              <div className="p-10 w-full">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-2xl p-5 text-center shadow-sm border border-white"
                      style={{ borderTopColor: stat.color, borderTopWidth: "3px" }}
                    >
                      <div
                        className="font-serif text-3xl font-semibold"
                        style={{ color: stat.color }}
                      >
                        {stat.num}
                      </div>
                      <div className="text-xs mt-1" style={{ color: "#857d74" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs italic" style={{ color: "#aba49a" }}>
                  Foto: müştəridən alınacaq
                </p>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(45,122,89,0.1)", color: "#2d7a59", letterSpacing: "0.08em" }}
            >
              HAQQIMIZDA
            </span>
            <h2
              id="about-heading"
              className="font-serif text-3xl md:text-4xl mb-4 text-balance"
              style={{ color: "#1a1714" }}
            >
              {t("title")}
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#645e57" }}>
              {t("subtitle")}
            </p>

            <p className="leading-relaxed mb-6" style={{ color: "#46413b" }}>
              Bakı Ağrı Klinikası Azərbaycanda ağrı menecmenti sahəsində ixtisaslaşmış
              müəssisədir. Ultrasəs və fluoroskopiya bələdçiliyi ilə aparılan müasir
              girişimsəl prosedurlar həyat keyfiyyətini əhəmiyyətli dərəcədə yaxşılaşdırır.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 mt-0.5"
                    style={{ color: "#2d7a59" }}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: "#46413b" }}>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/haqqimizda"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #0b6b7a 0%, #1a8fad 100%)" }}
            >
              {t("learnMore")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
