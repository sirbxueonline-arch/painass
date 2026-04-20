import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  locale: string;
  className?: string;
  inverted?: boolean;
}

const clinicNames: Record<string, { line1: string; line2: string }> = {
  az: { line1: "Bakı Ağrı", line2: "Klinikası" },
  ru: { line1: "Бакинская", line2: "Клиника Боли" },
  en: { line1: "Baku Pain", line2: "Clinic" },
};

export function Logo({ locale, className, inverted = false }: LogoProps) {
  const names = clinicNames[locale] ?? clinicNames.az;

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group focus-visible:outline-none", className)}
      aria-label="Bakı Ağrı Klinikası — Ana səhifə"
    >
      {/* Wordmark symbol */}
      <div
        className={cn(
          "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105",
          inverted ? "bg-white/20" : "bg-[#0b6b7a]"
        )}
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Stylised cross / plus in white — clean medical icon */}
          <rect x="8.5" y="2" width="3" height="16" rx="1.5" fill="white" />
          <rect x="2" y="8.5" width="16" height="3" rx="1.5" fill="white" />
        </svg>
      </div>

      {/* Text */}
      <div className="leading-tight">
        <div
          className={cn(
            "font-serif text-sm font-normal leading-none",
            inverted ? "text-white" : "text-[#0b6b7a]"
          )}
        >
          {names.line1}
        </div>
        <div
          className={cn(
            "font-serif text-sm font-normal leading-none mt-0.5",
            inverted ? "text-white/80" : "text-[#1a1816]"
          )}
        >
          {names.line2}
        </div>
      </div>
    </Link>
  );
}
