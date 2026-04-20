import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { Badge } from "@/components/ui/badge";
import { doctors, getDoctorBySlug } from "@/lib/doctors";
import { clinic } from "@/lib/clinic";
import { Globe, GraduationCap, BookOpen, Stethoscope } from "lucide-react";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};

  const title =
    locale === "ru" ? doctor.titleRu : locale === "en" ? doctor.titleEn : doctor.titleAz;
  const clinicName =
    locale === "ru" ? clinic.nameRu : locale === "en" ? clinic.nameEn : clinic.nameAz;

  return {
    title: doctor.name,
    description: `${doctor.name} — ${title} | ${clinicName}`,
    openGraph: { title: `${doctor.name} | ${clinicName}` },
  };
}

function DoctorDetailContent({ slug }: { slug: string }) {
  const locale = useLocale();
  const t = useTranslations("doctors");
  const doctor = getDoctorBySlug(slug);

  if (!doctor) notFound();

  const title =
    locale === "ru" ? doctor.titleRu : locale === "en" ? doctor.titleEn : doctor.titleAz;
  const bio =
    locale === "ru" ? doctor.bioRu : locale === "en" ? doctor.bioEn : doctor.bioAz;
  const cleanBio = bio.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim();
  const isDraft = bio.startsWith("//");

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="pt-28 pb-16 bg-[#f5f3ef]">
          <div className="container-site">
            <Breadcrumbs
              items={[
                { label: "Ana Səhifə", href: "/" },
                { label: t("title"), href: "/hekimlerimiz" },
                { label: doctor.name },
              ]}
            />
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container-site max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Photo sidebar */}
              <div className="lg:col-span-1">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#e8f4f6] mb-5">
                  <Image
                    src={doctor.photo}
                    alt={`${doctor.name} — ${title}`}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                {/* Languages */}
                <div className="bg-[#f5f3ef] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="h-4 w-4 text-[#0b6b7a]" aria-hidden="true" />
                    <span className="text-sm font-semibold text-[#1a1816]">Dillər</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((lang) => (
                      <Badge key={lang} variant="secondary">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="lg:col-span-2">
                {isDraft && (
                  <Badge variant="accent" className="mb-4">
                    DRAFT — tibbi nəzərdən keçirmə gözlənilir
                  </Badge>
                )}
                <h1 className="font-serif text-4xl text-[#1a1816] mb-1">{doctor.name}</h1>
                <p className="text-[#0b6b7a] font-medium text-lg mb-6">{title}</p>

                {/* Specialties */}
                {doctor.specialties.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Stethoscope className="h-4 w-4 text-[#0b6b7a]" aria-hidden="true" />
                      <span className="text-sm font-semibold text-[#1a1816]">İxtisaslaşma</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((spec) => (
                        <Badge key={spec} variant="outline">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bio */}
                <div className="prose-clinical mb-8">
                  <h2 className="font-serif text-xl text-[#1a1816] mb-3">Bioqrafiya</h2>
                  <p className="text-[#4a4540]">{cleanBio}</p>
                </div>

                {/* Education */}
                {doctor.education.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="h-4 w-4 text-[#0b6b7a]" aria-hidden="true" />
                      <span className="text-sm font-semibold text-[#1a1816]">Təhsil</span>
                    </div>
                    <ul className="space-y-2">
                      {doctor.education.map((edu, i) => (
                        <li key={i} className="text-sm text-[#4a4540] pl-3 border-l-2 border-[#0b6b7a]">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Publications */}
                {doctor.publications.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-[#0b6b7a]" aria-hidden="true" />
                      <span className="text-sm font-semibold text-[#1a1816]">Nəşrlər</span>
                    </div>
                    <ul className="space-y-2">
                      {doctor.publications.map((pub, i) => (
                        <li key={i} className="text-sm text-[#4a4540]">
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default async function DoctorDetailPage({ params }: Props) {
  const { slug } = await params;
  return <DoctorDetailContent slug={slug} />;
}
