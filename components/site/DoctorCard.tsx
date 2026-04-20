import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Doctor } from "@/lib/doctors";

interface DoctorCardProps {
  doctor: Doctor;
  locale: string;
  viewProfileLabel: string;
  className?: string;
}

export function DoctorCard({ doctor, locale, viewProfileLabel, className }: DoctorCardProps) {
  const title =
    locale === "ru"
      ? doctor.titleRu
      : locale === "en"
        ? doctor.titleEn
        : doctor.titleAz;

  return (
    <article
      className={cn(
        "group bg-white rounded-2xl border border-[#e8e4de] overflow-hidden hover:border-[#0b6b7a]/30 hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      {/* Photo */}
      <div className="relative h-56 bg-[#f5f3ef] overflow-hidden">
        <Image
          src={doctor.photo}
          alt={`${doctor.name} — ${title}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg text-[#1a1816] leading-snug">{doctor.name}</h3>
        <p className="text-sm text-[#0b6b7a] font-medium mt-0.5 mb-3">{title}</p>

        {/* Languages */}
        {doctor.languages.length > 0 && (
          <div className="flex items-center gap-1.5 mb-4">
            <Globe className="h-3.5 w-3.5 text-[#8a8178] shrink-0" aria-hidden="true" />
            <p className="text-xs text-[#8a8178]">{doctor.languages.join(", ")}</p>
          </div>
        )}

        <Link
          href={{ pathname: "/hekimlerimiz/[slug]", params: { slug: doctor.slug } }}
          className="inline-flex items-center gap-1.5 text-sm text-[#0b6b7a] font-medium hover:gap-2.5 transition-all"
          aria-label={`${viewProfileLabel}: ${doctor.name}`}
        >
          {viewProfileLabel}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
