"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeLabels: Record<string, string> = {
  az: "AZ",
  ru: "RU",
  en: "EN",
};

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
}

export function LanguageSwitcher({ className, compact = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace(pathname as any, { locale: next });
  }

  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="navigation"
      aria-label="Dil seçimi"
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          <button
            onClick={() => switchLocale(loc)}
            className={cn(
              "text-xs font-medium px-1.5 py-0.5 rounded transition-colors",
              locale === loc
                ? "text-[#0b6b7a] font-semibold"
                : "text-[#8a8178] hover:text-[#4a4540]"
            )}
            aria-current={locale === loc ? "true" : undefined}
            aria-label={`Dili ${loc.toUpperCase()} olaraq dəyişdir`}
          >
            {localeLabels[loc]}
          </button>
          {!compact && i < routing.locales.length - 1 && (
            <span className="text-[#d4cfc7] text-xs" aria-hidden="true">
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
