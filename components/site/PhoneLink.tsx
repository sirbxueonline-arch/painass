import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

interface PhoneLinkProps {
  number: string;
  formatted: string;
  className?: string;
  showIcon?: boolean;
}

export function PhoneLink({
  number,
  formatted,
  className,
  showIcon = false,
}: PhoneLinkProps) {
  return (
    <a
      href={`tel:${number}`}
      className={cn(
        "font-numeric inline-flex items-center gap-1.5 hover:text-[#0b6b7a] transition-colors",
        className
      )}
      aria-label={`Zəng edin: ${formatted}`}
    >
      {showIcon && <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />}
      {formatted}
    </a>
  );
}
