import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-400/90 text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] hover:bg-cyan-300",
        secondary:
          "bg-white/5 text-slate-100 border border-white/15 backdrop-blur-xl hover:bg-white/10",
        ghost: "text-slate-200 hover:bg-white/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-11 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
