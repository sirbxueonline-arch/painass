import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Yol xəritəsi" className="flex items-center gap-1.5 text-sm text-[#8a8178]">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-[#d4cfc7]" aria-hidden="true" />
              )}
              {isLast || !item.href ? (
                <span
                  className={isLast ? "text-[#2e2b27] font-medium" : ""}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href as "/"}
                  className="hover:text-[#0b6b7a] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
