import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["az", "ru", "en"],
  defaultLocale: "az",
  pathnames: {
    "/": "/",
    "/haqqimizda": {
      az: "/haqqimizda",
      ru: "/o-nas",
      en: "/about",
    },
    "/xidmetler": {
      az: "/xidmetler",
      ru: "/uslugi",
      en: "/services",
    },
    "/xidmetler/[slug]": {
      az: "/xidmetler/[slug]",
      ru: "/uslugi/[slug]",
      en: "/services/[slug]",
    },
    "/hekimlerimiz": {
      az: "/hekimlerimiz",
      ru: "/vrachi",
      en: "/doctors",
    },
    "/hekimlerimiz/[slug]": {
      az: "/hekimlerimiz/[slug]",
      ru: "/vrachi/[slug]",
      en: "/doctors/[slug]",
    },
    "/check-up": {
      az: "/check-up",
      ru: "/check-up",
      en: "/check-up",
    },
    "/bloq": {
      az: "/bloq",
      ru: "/blog",
      en: "/blog",
    },
    "/bloq/[slug]": {
      az: "/bloq/[slug]",
      ru: "/blog/[slug]",
      en: "/blog/[slug]",
    },
    "/tedbirler": {
      az: "/tedbirler",
      ru: "/meropriyatiya",
      en: "/events",
    },
    "/xestelere": {
      az: "/xestelere",
      ru: "/patsientam",
      en: "/for-patients",
    },
    "/elaqe": {
      az: "/elaqe",
      ru: "/kontakty",
      en: "/contact",
    },
    "/mexfilik": {
      az: "/mexfilik",
      ru: "/konfidentsialnost",
      en: "/privacy",
    },
    "/istifade-sertleri": {
      az: "/istifade-sertleri",
      ru: "/usloviya-ispolzovaniya",
      en: "/terms",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
