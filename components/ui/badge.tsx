import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(232,124,12,0.1)] text-[#E87C0C] border border-[rgba(232,124,12,0.25)] hover:bg-[rgba(232,124,12,0.2)]",
        outline:
          "border border-border text-text-secondary",
        secondary:
          "bg-bg-secondary text-text-secondary border border-border",
      },
      size: {
        default: "px-3 py-1",
        sm: "px-2 py-0.5 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
