export interface Service {
  slug: string;
  icon: string;
  titleAz: string;
  titleRu: string;
  titleEn: string;
  summaryAz: string;
  summaryRu: string;
  summaryEn: string;
  category: "interventional" | "pain-management" | "diagnostic" | "package";
  featured: boolean;
}

export const services: Service[] = [
  {
    slug: "ultrasas-regional-anesteziya",
    icon: "Waves",
    titleAz: "Ultrasəs bələdçiliyi ilə regional anesteziya",
    titleRu: "Регионарная анестезия под контролем УЗИ",
    titleEn: "Ultrasound-guided regional anaesthesia",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: Ultrasəs görüntüləmə ilə dəqiq sinir blokları, minimal invaziv, maksimum effektivlik.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Точные нервные блокады под ультразвуковым контролем.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Precise nerve blocks performed under real-time ultrasound guidance.",
    category: "interventional",
    featured: true,
  },
  {
    slug: "fluoroskopiya-girisimsel-prosedurlar",
    icon: "Scan",
    titleAz: "Fluoroskopiya bələdçiliyi ilə girişimsəl prosedurlar",
    titleRu: "Интервенционные процедуры под контролем флюороскопии",
    titleEn: "Fluoroscopy-guided interventional procedures",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: X-ray/C-arm bələdçiliyi ilə onurğa prosedurları.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Процедуры на позвоночнике под рентгеноскопическим контролем.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Spinal procedures performed under fluoroscopic (X-ray/C-arm) guidance.",
    category: "interventional",
    featured: true,
  },
  {
    slug: "sinir-blokadalari",
    icon: "Zap",
    titleAz: "Sinir blokadaları",
    titleRu: "Нервные блокады",
    titleEn: "Nerve blocks",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: Periferik və mərkəzi sinir blokadaları, ağrı siqnallarını müvəqqəti dayandırır.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Периферические и центральные блокады нервов.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Peripheral and central nerve blocks to interrupt pain signals.",
    category: "interventional",
    featured: true,
  },
  {
    slug: "epidural-inyeksiyalar",
    icon: "Syringe",
    titleAz: "Epidural inyeksiyalar",
    titleRu: "Эпидуральные инъекции",
    titleEn: "Epidural injections",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: Epidural boşluğa steroid inyeksiyası ilə iltihabı azaldır.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Введение стероидов в эпидуральное пространство.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Steroid injections into the epidural space to reduce inflammation.",
    category: "interventional",
    featured: true,
  },
  {
    slug: "faset-oynaq-inyeksiyalari",
    icon: "Bone",
    titleAz: "Faset oynaq inyeksiyaları",
    titleRu: "Инъекции в фасеточные суставы",
    titleEn: "Facet joint injections",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: Onurğa faset oynaqlarına birbaşa inyeksiya, boyun və bel ağrılarında.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Прямые инъекции в фасеточные суставы позвоночника.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Direct injections into spinal facet joints for neck and back pain.",
    category: "interventional",
    featured: false,
  },
  {
    slug: "radiofrequency-ablasiya",
    icon: "Radio",
    titleAz: "Radiofrequency ablasiya (RF)",
    titleRu: "Радиочастотная абляция (РЧА)",
    titleEn: "Radiofrequency ablation (RFA)",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: İstilik enerjisi ilə ağrı ötürən sinir lifləri məhv edilir, uzunmüddətli nəticə.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Термическое разрушение болевых нервных волокон.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Thermal destruction of pain-transmitting nerve fibres for long-lasting relief.",
    category: "interventional",
    featured: true,
  },
  {
    slug: "trigger-nokta-inyeksiyalari",
    icon: "Target",
    titleAz: "Trigger nöqtə inyeksiyaları",
    titleRu: "Инъекции в триггерные точки",
    titleEn: "Trigger point injections",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: Əzələ spazmlarının görüldüyü nöqtələrə birbaşa müdaxilə.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Прямое воздействие на точки мышечного спазма.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Direct treatment of muscle spasm trigger points.",
    category: "interventional",
    featured: false,
  },
  {
    slug: "xroniki-bel-boyun-agrisi",
    icon: "Activity",
    titleAz: "Xroniki bel və boyun ağrısının müalicəsi",
    titleRu: "Лечение хронической боли в спине и шее",
    titleEn: "Chronic back and neck pain management",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: Kompleks yanaşma ilə xroniki bel və boyun ağrılarının uzunmüddətli idarə edilməsi.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Комплексное долгосрочное лечение хронических болей в спине и шее.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Comprehensive long-term management of chronic back and neck pain.",
    category: "pain-management",
    featured: true,
  },
  {
    slug: "xercheng-agrisi-muaricesi",
    icon: "Heart",
    titleAz: "Xərçəng ağrısının müalicəsi",
    titleRu: "Лечение онкологической боли",
    titleEn: "Cancer pain management",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: Onkoloji xəstələrdə ağrı nəzarəti üçün xüsusləşdirilmiş yanaşmalar.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Специализированные подходы к контролю боли у онкологических пациентов.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Specialised pain control approaches for oncology patients.",
    category: "pain-management",
    featured: false,
  },
  {
    slug: "bas-agrisi-migren-muaricesi",
    icon: "Brain",
    titleAz: "Baş ağrısı və migren müalicəsi",
    titleRu: "Лечение головной боли и мигрени",
    titleEn: "Headache and migraine treatment",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: Xroniki baş ağrısı və migren üçün ixtisaslaşmış protokollar.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Специализированные протоколы лечения хронической головной боли и мигрени.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Specialised protocols for chronic headache and migraine.",
    category: "pain-management",
    featured: false,
  },
  {
    slug: "neyropatik-agri",
    icon: "Zap",
    titleAz: "Neyropatik ağrı",
    titleRu: "Нейропатическая боль",
    titleEn: "Neuropathic pain",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: Sinir zədələnməsindən yaranan yanma, sancı tipli ağrıların müalicəsi.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Лечение жжения и колющих болей, вызванных повреждением нервов.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Treatment of burning, shooting pain caused by nerve damage.",
    category: "pain-management",
    featured: false,
  },
  {
    slug: "check-up",
    icon: "ClipboardList",
    titleAz: "Check-up paketləri",
    titleRu: "Пакеты чек-ап",
    titleEn: "Check-up packages",
    summaryAz:
      "// DRAFT — Dr. Yusifov ilə nəzərdən keçirilin: Kompleks tibbi müayinə paketləri, ağrı riskinin qiymətləndirilməsi.",
    summaryRu:
      "// TODO: professional translation — DRAFT: Комплексные пакеты медицинского обследования.",
    summaryEn:
      "// TODO: professional translation — DRAFT: Comprehensive medical check-up packages with pain risk assessment.",
    category: "package",
    featured: true,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}
