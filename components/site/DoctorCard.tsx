import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Globe, Award } from "lucide-react";
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
    locale === "ru" ? doctor.titleRu : locale === "en" ? doctor.titleEn : doctor.titleAz;

  return (
    <article
      className={cn(
        "group relative bg-white rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-1",
        className
      )}
      style={{
        border: "1px solid rgba(230,225,217,0.8)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
      }}
    >
      {/* Hover shadow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px] pointer-events-none -z-10"
        style={{ boxShadow: "0 25px 60px -15px rgba(11,107,122,0.3)" }}
        aria-hidden="true"
      />

      {/* Photo */}
      <div
        className="relative h-64 overflow-hidden"
        style={{ background: "linear-gradient(145deg, #e0f6f9 0%, #e6f6fb 50%, #eaf5f0 100%)" }}
      >
        <Image
          src={doctor.photo}
          alt={`${doctor.name} — ${title}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(5,56,68,0.35) 0%, transparent 50%)" }}
        />

        {/* Credential badge */}
        <div
          className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <Award className="h-3 w-3" style={{ color: "#d4603a" }} />
          <span className="text-[10px] font-semibold" style={{ color: "#053844" }}>Sertifikatlı</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl leading-snug mb-1" style={{ color: "#1a1714" }}>
          {doctor.name}
        </h3>
        <p className="text-sm font-medium mb-4" style={{ color: "#1a8fad" }}>
          {title}
        </p>

        {/* Languages */}
        {doctor.languages.length > 0 && (
          <div
            className="flex items-center gap-1.5 mb-5 pb-5"
            style={{ borderBottom: "1px solid #f3f1ed" }}
          >
            <Globe className="h-3.5 w-3.5 shrink-0" style={{ color: "#aba49a" }} aria-hidden="true" />
            <p className="text-xs" style={{ color: "#857d74" }}>{doctor.languages.join(" · ")}</p>
          </div>
        )}

        <Link
          href={{ pathname: "/hekimlerimiz/[slug]", params: { slug: doctor.slug } }}
          className="group/link inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: "#0b6b7a" }}
          aria-label={`${viewProfileLabel}: ${doctor.name}`}
        >
          <span>{viewProfileLabel}</span>
          <span
            className="inline-flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 group-hover/link:w-9"
            style={{ background: "rgba(11,107,122,0.1)" }}
          >
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </article>
  );
}
