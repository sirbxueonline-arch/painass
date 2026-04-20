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
  return { title: t("terms") };
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="pt-28 pb-16 bg-[#f5f3ef]">
          <div className="container-site">
            <Breadcrumbs items={[{ label: "Ana Səhifə", href: "/" }, { label: "İstifadə şərtləri" }]} />
            <h1 className="font-serif text-4xl text-[#1a1816] mt-4">İstifadə Şərtləri</h1>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container-site max-w-3xl prose-clinical">
            <div className="bg-[#fdf0eb] rounded-xl p-4 mb-8 text-sm text-[#c96a3e]">
              DRAFT — Hüquqi məşvərətçilə birlikdə tam istifadə şərtləri hazırlanmalıdır
            </div>

            <p className="text-[#6b6460] text-sm mb-6">Son yenilənmə: 2024-ci il</p>

            <h2>Saytdan istifadə</h2>
            <p>
              Bu saytdan istifadə etməklə, aşağıda göstərilən şərtləri qəbul etmiş hesab
              olunursunuz.
            </p>

            <h2>Tibbi məlumat xəbərdarlığı</h2>
            <p>
              Bu saytda yerləşdirilən məlumatlar yalnız ümumi tanışlıq məqsədi daşıyır və
              peşəkar tibbi məsləhəti əvəz etmir. Tibbi qərarlar almadan əvvəl mütəxəssislə
              məsləhətləşin.
            </p>

            <h2>Məsuliyyətin məhdudlaşdırılması</h2>
            <p>
              {clinic.nameAz} saytdakı məlumatların tam dəqiqliyi barədə heç bir zəmanət
              vermir.
            </p>

            <h2>Əlaqə</h2>
            <p>
              Suallar üçün{" "}
              <a href={`mailto:${clinic.email}`} className="text-[#0b6b7a] hover:underline">
                {clinic.email}
              </a>
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
