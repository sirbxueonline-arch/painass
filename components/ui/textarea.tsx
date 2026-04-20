import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-xl border border-[#d4cfc7] bg-white px-4 py-3 text-sm text-[#1a1816] ring-offset-white placeholder:text-[#b0a99e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b7a] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
