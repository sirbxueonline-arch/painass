export const clinic = {
  nameAz: "Bakı Ağrı Klinikası",
  nameEn: "Baku Pain Clinic",
  nameRu: "Бакинская Клиника Боли",
  tagline: {
    az: "Ağrısız həyat üçün ixtisaslaşmış həkim köməyi",
    en: "Specialist care for a life without pain",
    ru: "Специализированная помощь для жизни без боли",
  },
  address: {
    street: "Mirəli Seyidov 10C",
    district: "Yasamal",
    city: "Bakı",
    postalCode: "AZ1100",
    country: "Azərbaycan",
    landmark: "Yasamal Rayon İcra Hakimiyyətinin yaxınlığında",
  },
  phones: {
    landline: "+994124607170",
    landlineFormatted: "+994 12 460 71 70",
    mobile: "+994554607170",
    mobileFormatted: "+994 55 460 71 70",
  },
  email: "info@pain.az", // TODO: confirm with client
  socials: {
    instagram: "https://instagram.com/bakiagriklinikasi",
    facebook: "https://facebook.com/bakiagriklinikasi", // TODO: confirm URL
    youtube: "", // TODO: ask client for YouTube URL
    threads: "https://threads.net/@bakiagriklinikasi",
  },
  hours: {
    // TODO: confirm exact hours with client
    weekdays: "09:00 – 18:00",
    saturday: "09:00 – 14:00",
    sunday: "Bağlı",
    sundayRu: "Закрыто",
    sundayEn: "Closed",
  },
  coordinates: { lat: 40.3889, lng: 49.8372 }, // TODO: verify exact coordinates
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pain.az",
};

export type Clinic = typeof clinic;
