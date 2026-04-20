"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

// DRAFT — replace with real patient reviews (with patient consent) before launch
const testimonials = [
  {
    id: 1,
    nameAz: "X.M.",
    nameRu: "Х.М.",
    nameEn: "H.M.",
    textAz:
      "// DRAFT — Həqiqi rəylər üçün müştəri ilə əlaqə saxlayın. Uzun müddətdir əziyyət çəkdiyim bel ağrısından qurtuldum.",
    textRu:
      "// TODO: real review — DRAFT: Избавился от боли в спине, которая беспокоила меня долгое время.",
    textEn:
      "// TODO: real review — DRAFT: I finally got relief from the back pain that had troubled me for years.",
    rating: 5,
  },
  {
    id: 2,
    nameAz: "F.Ə.",
    nameRu: "Ф.А.",
    nameEn: "F.A.",
    textAz:
      "// DRAFT — Həqiqi rəylər üçün müştəri ilə əlaqə saxlayın. Peşəkar komanda, müasir avadanlıq, nəticə əla.",
    textRu:
      "// TODO: real review — DRAFT: Профессиональная команда, современное оборудование, отличные результаты.",
    textEn:
      "// TODO: real review — DRAFT: Professional team, modern equipment, excellent results.",
    rating: 5,
  },
  {
    id: 3,
    nameAz: "N.H.",
    nameRu: "Н.Г.",
    nameEn: "N.H.",
    textAz:
      "// DRAFT — Həqiqi rəylər üçün müştəri ilə əlaqə saxlayın. Epidural inyeksiyadan sonra ağrım əhəmiyyətli dərəcədə azaldı.",
    textRu:
      "// TODO: real review — DRAFT: После эпидуральной инъекции боль значительно уменьшилась.",
    textEn:
      "// TODO: real review — DRAFT: After the epidural injection, my pain reduced significantly.",
    rating: 5,
  },
];

interface TestimonialCarouselProps {
  locale: string;
}

export function TestimonialCarousel({ locale }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  function prev() {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setCurrent((c) => (c + 1) % testimonials.length);
  }

  const t = testimonials[current];
  const text =
    locale === "ru" ? t.textRu : locale === "en" ? t.textEn : t.textAz;
  const name =
    locale === "ru" ? t.nameRu : locale === "en" ? t.nameEn : t.nameAz;
  const cleanText = text.startsWith("//")
    ? text.replace(/^\/\/ (DRAFT|TODO)[^:]*:\s*/i, "").trim()
    : text;

  return (
    <div
      className="relative rounded-2xl p-8 md:p-10 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #e0f6f9 0%, #e6f6fb 100%)", border: "1px solid rgba(26,143,173,0.15)" }}
    >
      {/* Decorative quote icon */}
      <div
        className="absolute top-6 right-8 opacity-10"
        aria-hidden="true"
      >
        <Quote className="h-16 w-16" style={{ color: "#0b6b7a" }} />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5" aria-label={`${t.rating} ulduz`}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4" style={{ fill: "#d4603a", color: "#d4603a" }} aria-hidden="true" />
        ))}
      </div>

      <blockquote className="relative z-10">
        <p className="text-lg leading-relaxed font-serif italic mb-6" style={{ color: "#2c2824" }}>
          &ldquo;{cleanText}&rdquo;
        </p>
        <footer>
          <cite className="not-italic text-sm font-semibold" style={{ color: "#0b6b7a" }}>
            — {name}
          </cite>
        </footer>
      </blockquote>

      {/* Navigation */}
      <div className="flex items-center gap-3 mt-8">
        <button
          onClick={prev}
          className="p-2 rounded-xl transition-all hover:scale-110"
          style={{ background: "white", color: "#0b6b7a", boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }}
          aria-label="Əvvəlki rəy"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex gap-1.5" role="tablist" aria-label="Rəy naviqasiyası">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Rəy ${i + 1}`}
              className={cn("h-2 rounded-full transition-all duration-300")}
              style={{
                width: i === current ? "20px" : "8px",
                background: i === current ? "#0b6b7a" : "#b0ccd0",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-xl transition-all hover:scale-110"
          style={{ background: "white", color: "#0b6b7a", boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }}
          aria-label="Növbəti rəy"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
