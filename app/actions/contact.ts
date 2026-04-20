"use server";

import { contactSchema } from "@/lib/contact-schema";
import { clinic } from "@/lib/clinic";

// Simple in-memory rate limiting (per server instance)
// For production, use Redis or Upstash
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const times = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW
  );
  if (times.length >= RATE_LIMIT_MAX) return true;
  submissions.set(ip, [...times, now]);
  return false;
}

export interface ContactActionResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  formData: unknown,
  ip = "unknown"
): Promise<ContactActionResult> {
  // Rate limit check
  if (isRateLimited(ip)) {
    return { success: false, error: "Çox sayda sorğu. Bir az sonra yenidən cəhd edin." };
  }

  // Validate
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: "Formdakı məlumatlar düzgün deyil." };
  }

  const data = parsed.data;

  // Honeypot check
  if (data.website && data.website.length > 0) {
    // Silently succeed to fool bots
    return { success: true };
  }

  // Send email via Resend
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.FORM_TO_EMAIL ?? clinic.email;

  if (!apiKey || apiKey === "re_xxxxxxxxxxxxxxxxxxxx") {
    // Dev mode: just log
    console.log("[ContactForm] Submission (dev mode):", data);
    return { success: true };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const serviceNames: Record<string, string> = {
      "ultrasəs-regional-anesteziya": "Regional anesteziya (Ultrasəs)",
      "fluoroskopiya-girisimsel-prosedurlar": "Fluoroskopiya ilə prosedurlar",
      "sinir-blokadalari": "Sinir blokadaları",
      "epidural-inyeksiyalar": "Epidural inyeksiyalar",
      "faset-oynaq-inyeksiyalari": "Faset oynaq inyeksiyaları",
      "radiofrequency-ablasiya": "Radiofrequency ablasiya",
      "trigger-nokta-inyeksiyalari": "Trigger nöqtə inyeksiyaları",
      "xroniki-bel-boyun-agrisi": "Xroniki bel/boyun ağrısı",
      "xərçəng-ağrısının-müalicəsi": "Xərçəng ağrısı",
      "bas-ağrısı-migren-müalicəsi": "Baş ağrısı / Migren",
      "neyropatik-agri": "Neyropatik ağrı",
      "check-up": "Check-up paketi",
    };

    const serviceName = data.service
      ? (serviceNames[data.service] ?? data.service)
      : "Göstərilməyib";

    await resend.emails.send({
      from: "Bakı Ağrı Klinikası <noreply@pain.az>",
      to: toEmail,
      subject: `Yeni müraciət: ${data.name}`,
      text: `
Yeni müraciət

Ad Soyad: ${data.name}
Telefon: ${data.phone}
E-poçt: ${data.email || "Göstərilməyib"}
Xidmət: ${serviceName}
Üstünlük verilən tarix: ${data.preferredDate || "Göstərilməyib"}

Mesaj:
${data.message || "—"}

---
Bakı Ağrı Klinikası — pain.az
      `.trim(),
      html: `
<!DOCTYPE html>
<html lang="az">
<head><meta charset="utf-8" /></head>
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1816;">
  <div style="background: #0b6b7a; padding: 24px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; font-size: 20px; margin: 0;">Yeni müraciət</h1>
  </div>
  <div style="background: #f5f3ef; padding: 24px; border-radius: 0 0 12px 12px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #6b6460; font-size: 14px;">Ad Soyad</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
      <tr><td style="padding: 8px 0; color: #6b6460; font-size: 14px;">Telefon</td><td style="padding: 8px 0; font-weight: 600;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #6b6460; font-size: 14px;">E-poçt</td><td style="padding: 8px 0;">${data.email || "—"}</td></tr>
      <tr><td style="padding: 8px 0; color: #6b6460; font-size: 14px;">Xidmət</td><td style="padding: 8px 0;">${serviceName}</td></tr>
      <tr><td style="padding: 8px 0; color: #6b6460; font-size: 14px;">Tarix</td><td style="padding: 8px 0;">${data.preferredDate || "—"}</td></tr>
    </table>
    ${data.message ? `<div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; font-size: 14px; line-height: 1.6;">${data.message}</div>` : ""}
  </div>
  <p style="font-size: 12px; color: #8a8178; margin-top: 16px; text-align: center;">Bakı Ağrı Klinikası — pain.az</p>
</body>
</html>
      `.trim(),
    });

    return { success: true };
  } catch (err) {
    console.error("[ContactForm] Email send error:", err);
    return { success: false, error: "E-poçt göndərilmədi. Zəhmət olmasa birbaşa zəng edin." };
  }
}
