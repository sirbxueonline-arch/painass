import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "sonner";
import { CookieBanner } from "@/components/site/CookieBanner";
import { AppointmentBar } from "@/components/site/AppointmentBar";
import { clinic } from "@/lib/clinic";
import "../globals.css";

// Inter: full Azerbaijani coverage (ə, Ə, ğ, ş, ı, İ, ç, ö, ü)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Playfair Display: full Latin Extended coverage for Azerbaijani headings
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  const names = {
    az: clinic.nameAz,
    ru: clinic.nameRu,
    en: clinic.nameEn,
  };
  const clinicName = names[locale as keyof typeof names] ?? clinic.nameAz;

  return {
    metadataBase: new URL(clinic.siteUrl),
    title: {
      default: clinicName,
      template: `%s | ${clinicName}`,
    },
    description: t("subheadline"),
    openGraph: {
      siteName: clinicName,
      locale: locale === "ru" ? "ru_RU" : locale === "en" ? "en_GB" : "az_AZ",
      type: "website",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        az: "/az",
        ru: "/ru",
        en: "/en",
        "x-default": "/az",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "az" | "ru" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        {/* Skip to main content — keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#0b6b7a] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Əsas məzmuna keç
        </a>
        <NextIntlClientProvider messages={messages}>
          {children}
          <AppointmentBar phone={clinic.phones.mobile} />
          <CookieBanner />
          <Toaster richColors position="top-center" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
