"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b7a] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#0b6b7a] text-white hover:bg-[#095a68] active:bg-[#084d5a] shadow-sm hover:shadow-md",
        accent:
          "bg-[#c96a3e] text-white hover:bg-[#b55a30] active:bg-[#9e4e28] shadow-sm hover:shadow-md",
        outline:
          "border border-[#0b6b7a] text-[#0b6b7a] bg-transparent hover:bg-[#e8f4f6] active:bg-[#d0ecf0]",
        ghost:
          "text-[#0b6b7a] bg-transparent hover:bg-[#e8f4f6] active:bg-[#d0ecf0]",
        secondary:
          "bg-[#f5f3ef] text-[#2e2b27] hover:bg-[#e8e4de] active:bg-[#d4cfc7]",
        destructive:
          "bg-[#c0392b] text-white hover:bg-[#a93226] active:bg-[#922b21]",
        link: "text-[#0b6b7a] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-lg",
        default: "h-11 px-6 text-sm rounded-xl",
        lg: "h-13 px-8 text-base rounded-xl",
        xl: "h-14 px-10 text-base rounded-xl",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
