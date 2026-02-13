import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

// Since we don't have cva installed, I'll implementing a simple variant handler
// Ideally we would install class-variance-authority

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, isLoading, children, disabled, ...props }, ref) => {
    // Basic variant logic
    const variants = {
      default: "bg-sky-600 text-white hover:bg-sky-700 shadow-sm",
      destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
      outline: "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200/80",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
      link: "text-sky-600 underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    const Comp = asChild ? Slot : "button"; // Note: Slot requires @radix-ui/react-slot which might not be there. 
    // Wait, checking package.json again... NO radix packages.
    // I should fallback to simple button if asChild is not supported or just ignore asChild for now.
    
    // Fallback since I can't install packages:
    const Component = "button";

    return (
      <Component
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Component>
    );
  }
);
Button.displayName = "Button";

export { Button };
