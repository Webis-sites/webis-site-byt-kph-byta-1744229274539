import React, { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  // Base styles for all buttons
  "relative inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rtl:direction-rtl",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 active:translate-y-0.5 active:shadow-sm backdrop-blur-sm",
        secondary: "bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary/90 active:translate-y-0.5 active:shadow-sm backdrop-blur-sm",
        outline: "border border-primary/20 bg-white/10 text-primary shadow-sm backdrop-filter backdrop-blur-sm hover:bg-primary/5 hover:border-primary/30 active:translate-y-0.5",
        glass: "bg-white/10 border border-white/20 backdrop-filter backdrop-blur-md text-primary shadow-lg hover:bg-white/20 active:translate-y-0.5",
        neumorphic: "bg-gray-100 text-primary shadow-neumorphic hover:shadow-neumorphic-hover active:shadow-neumorphic-pressed active:translate-y-0.5"
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

// Utility function for class names (should be in utils/cn.ts)
// export function cn(...classes: (string | undefined | boolean)[]) {
//   return classes.filter(Boolean).join(' ');
// }