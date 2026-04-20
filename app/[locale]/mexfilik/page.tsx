import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { clinic } from "@/lib/clinic";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });
  return { title: t("privacy") };
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="pt-28 pb-16 bg-[#f5f3ef]">
          <div className="container-site">
            <Breadcrumbs items={[{ label: "Ana Səhifə", href: "/" }, { label: "Məxfilik siyasəti" }]} />
            <h1 className="font-serif text-4xl text-[#1a1816] mt-4">Məxfilik Siyasəti</h1>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container-site max-w-3xl prose-clinical">
            <div className="bg-[#fdf0eb] rounded-xl p-4 mb-8 text-sm text-[#c96a3e]">
              DRAFT — Hüquqi məşvərətçilə birlikdə tam məxfilik siyasəti hazırlanmalıdır
            </div>

            <p className="text-[#6b6460] text-sm mb-6">
              Son yenilənmə: 2024-ci il
            </p>

            <h2>Toplanılan məlumatlar</h2>
            <p>
              Bakı Ağrı Klinikası (pain.az) saytı əlaqə formu vasitəsilə sizin tərəfinizdən
              könüllü olaraq təqdim edilən ad, telefon nömrəsi, e-poçt ünvanı kimi şəxsi
              məlumatları toplayır.
            </p>

            <h2>Məlumatların istifadəsi</h2>
            <p>
              Topladığımız məlumatlar yalnız sizin müraciətinizə cavab vermək məqsədi ilə
              istifadə edilir. Heç bir üçüncü tərəflə paylaşılmır.
            </p>

            <h2>Cookie-lər</h2>
            <p>
              Saytımız istifadəçi təcrübəsini yaxşılaşdırmaq üçün cookie-lərdən istifadə edə
              bilər. Analitik cookie-lər yalnız sizin razılığınız ilə aktivləşdirilir.
            </p>

            <h2>Əlaqə</h2>
            <p>
              Şəxsi məlumatlarınızla bağlı hər hansı sualınız üçün{" "}
              <a href={`mailto:${clinic.email}`} className="text-[#0b6b7a] hover:underline">
                {clinic.email}
              </a>{" "}
              ünvanına yazın.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
