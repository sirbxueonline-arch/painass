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
        "group bg-white rounded-2xl border border-[#e6e1d9] overflow-hidden hover:shadow-xl transition-all duration-300",
        className
      )}
      style={{ borderTopColor: "#1a8fad", borderTopWidth: "3px" }}
    >
      {/* Photo */}
      <div className="relative h-56 overflow-hidden" style={{ background: "linear-gradient(135deg, #e0f6f9, #e6f6fb)" }}>
        <Image
          src={doctor.photo}
          alt={`${doctor.name} — ${title}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg leading-snug" style={{ color: "#1a1714" }}>{doctor.name}</h3>
        <p className="text-sm font-medium mt-0.5 mb-3" style={{ color: "#1a8fad" }}>{title}</p>

        {doctor.languages.length > 0 && (
          <div className="flex items-center gap-1.5 mb-4">
            <Globe className="h-3.5 w-3.5 shrink-0" style={{ color: "#aba49a" }} aria-hidden="true" />
            <p className="text-xs" style={{ color: "#857d74" }}>{doctor.languages.join(", ")}</p>
          </div>
        )}

        <Link
          href={{ pathname: "/hekimlerimiz/[slug]", params: { slug: doctor.slug } }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
          style={{ color: "#0b6b7a" }}
          aria-label={`${viewProfileLabel}: ${doctor.name}`}
        >
          {viewProfileLabel}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
