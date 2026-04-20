"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/services";
import { useLocale } from "next-intl";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const locale = useLocale();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    const result = await submitContactForm(data);
    if (result.success) {
      toast.success(t("successTitle"), { description: t("successMessage") });
      reset();
    } else {
      toast.error(t("errorTitle"), {
        description: result.error ?? t("errorMessage"),
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      aria-label="Əlaqə formu"
    >
      {/* Honeypot field — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Name */}
      <div className="space-y-1.5">
        <Label htmlFor="name">
          {t("name")} <span className="text-[#c96a3e]" aria-hidden="true">*</span>
        </Label>
        <Input
          id="name"
          placeholder={t("namePlaceholder")}
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-[#c0392b]" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone">
          {t("phone")} <span className="text-[#c96a3e]" aria-hidden="true">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder={t("phonePlaceholder")}
          autoComplete="tel"
          inputMode="tel"
          aria-required="true"
          aria-describedby={errors.phone ? "phone-error" : undefined}
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
        {errors.phone && (
          <p id="phone-error" className="text-xs text-[#c0392b]" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email">{t("email")}</Label>
        <Input
          id="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          autoComplete="email"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-[#c0392b]" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Service select */}
      <div className="space-y-1.5">
        <Label htmlFor="service">{t("service")}</Label>
        <Select onValueChange={(val) => setValue("service", val)}>
          <SelectTrigger id="service" aria-label={t("servicePlaceholder")}>
            <SelectValue placeholder={t("servicePlaceholder")} />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => {
              const title =
                locale === "ru" ? s.titleRu : locale === "en" ? s.titleEn : s.titleAz;
              return (
                <SelectItem key={s.slug} value={s.slug}>
                  {title}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      {/* Preferred date */}
      <div className="space-y-1.5">
        <Label htmlFor="preferredDate">{t("date")}</Label>
        <Input
          id="preferredDate"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          {...register("preferredDate")}
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message">{t("message")}</Label>
        <Textarea
          id="message"
          placeholder={t("messagePlaceholder")}
          rows={4}
          {...register("message")}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            {t("sending")}
          </>
        ) : (
          t("submit")
        )}
      </Button>

      <p className="text-xs text-[#8a8178] text-center">
        {/* Privacy note */}
        Məlumatlarınız yalnız müraciətinizin işlənməsi üçün istifadə ediləcəkdir.
      </p>
    </form>
  );
}
