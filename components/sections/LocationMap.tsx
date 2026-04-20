"use client";

import { useTranslations } from "next-intl";
import { clinic } from "@/lib/clinic";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationMap() {
  const t = useTranslations("contact");

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${clinic.coordinates.lat},${clinic.coordinates.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${clinic.coordinates.lat},${clinic.coordinates.lng}`;

  return (
    <div className="rounded-2xl overflow-hidden border border-[#e8e4de] bg-white">
      {/* Map embed */}
      <div className="relative h-64 md:h-80 bg-[#e8f4f6]">
        <iframe
          title="Bakı Ağrı Klinikası — Xəritə"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB-PLACEHOLDER&q=${clinic.coordinates.lat},${clinic.coordinates.lng}&zoom=16`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Klinikanın xəritədə yeri"
        />
        {/* Fallback overlay if map doesn't load */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#e8f4f6] pointer-events-none opacity-0 [iframe:not([src])_~_&]:opacity-100">
          <MapPin className="h-12 w-12 text-[#0b6b7a]" aria-hidden="true" />
        </div>
      </div>

      {/* Address card */}
      <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-[#0b6b7a] mt-0.5 shrink-0" aria-hidden="true" />
            <address className="not-italic text-sm text-[#2e2b27]">
              <strong className="font-medium">{clinic.address.street}</strong>
              <br />
              {clinic.address.district}, {clinic.address.city}, {clinic.address.postalCode}
              <br />
              <span className="text-[#8a8178] text-xs">{clinic.address.landmark}</span>
            </address>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <Button variant="outline" size="sm" asChild>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps-da yolu göstər"
            >
              <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
              {t("getDirections")}
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={`tel:${clinic.phones.mobile}`}>
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {t("callUs")}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
