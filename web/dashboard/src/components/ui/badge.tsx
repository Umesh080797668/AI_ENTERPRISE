import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "border-transparent bg-gray-900 text-gray-50 hover:bg-gray-900/80",
      secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-100/80",
      destructive: "border-transparent bg-red-500 text-gray-50 hover:bg-red-500/80",
      outline: "text-gray-950",
      success: "border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
      warning: "border-transparent bg-amber-100 text-amber-700 hover:bg-amber-200",
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }
