"use client";

import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";

interface AppointmentBarProps {
  phone: string;
}

export function AppointmentBar({ phone }: AppointmentBarProps) {
  const t = useTranslations("appointmentBar");

  return (
    <div className="md:hidden fixed bottom-6 right-4 z-40">
      <a
        href={`tel:${phone}`}
        className="flex items-center gap-2 bg-[#0b6b7a] text-white px-5 py-3.5 rounded-full shadow-lg shadow-[#0b6b7a]/30 hover:bg-[#095a68] active:scale-95 transition-all font-medium text-sm"
        aria-label={`${t("label")}: ${phone}`}
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
        {t("label")}
      </a>
    </div>
  );
}
