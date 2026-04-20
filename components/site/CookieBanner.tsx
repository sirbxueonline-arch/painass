"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_KEY = "pain_az_cookie_consent";

export function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie razılığı"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-[#e8e4de] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-[#4a4540] flex-1">{t("message")}</p>
        <div className="flex items-center gap-2 shrink-0">
          <Button size="sm" onClick={accept}>
            {t("accept")}
          </Button>
          <Button size="sm" variant="ghost" onClick={decline}>
            {t("decline")}
          </Button>
          <button
            onClick={decline}
            className="p-1.5 text-[#8a8178] hover:text-[#4a4540] rounded-lg hover:bg-[#f5f3ef] transition-colors"
            aria-label="Bağla"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
