import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Ultrasəs və fluoroskopiya bələdçiliyi ilə dəqiq prosedurlar",
  "Multidissiplinar ağrı menecmenti protokolları",
  "Hər xəstəyə fərdi müalicə planı",
  "Müasir avadanlıq, steril mühit",
];

export function AboutStrip() {
  const t = useTranslations("about");

  return (
    <section className="py-24 bg-white" aria-labelledby="about-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl bg-[#e8f4f6] aspect-[4/3] flex items-center justify-center">
              {/* TODO: replace with real clinic interior photo from client */}
              <div className="text-center p-10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { num: "10+", label: "il təcrübə" },
                    { num: "5000+", label: "xəstə" },
                    { num: "12", label: "xidmət növü" },
                    { num: "3", label: "dil" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                      <div className="font-serif text-2xl text-[#0b6b7a] font-normal">
                        {stat.num}
                      </div>
                      <div className="text-xs text-[#8a8178] mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#b0a99e] italic">
                  {/* TODO: replace with actual clinic interior photo */}
                  Foto: müştəridən alınacaq
                </p>
              </div>
            </div>

            {/* Accent corner decoration */}
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-[#0b6b7a]/10 pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium text-[#0b6b7a] mb-2 uppercase tracking-wider">
              Haqqımızda
            </p>
            <h2
              id="about-heading"
              className="font-serif text-3xl md:text-4xl text-[#1a1816] mb-4 text-balance"
            >
              {t("title")}
            </h2>
            <p className="text-[#6b6460] text-lg leading-relaxed mb-6">{t("subtitle")}</p>

            {/* DRAFT — review with clinic management before launch */}
            <p className="text-[#4a4540] leading-relaxed mb-6">
              {/* DRAFT — klinika rəhbərliyi ilə nəzərdən keçirin */}
              Bakı Ağrı Klinikası Azərbaycanda ağrı menecmenti sahəsində ixtisaslaşmış
              müəssisədir. Ultrasəs və fluoroskopiya bələdçiliyi ilə aparılan müasir
              girişimsəl prosedurlar həyat keyfiyyətini əhəmiyyətli dərəcədə yaxşılaşdırır.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="h-5 w-5 text-[#0b6b7a] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[#4a4540] text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild>
              <Link href="/haqqimizda">{t("learnMore")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
