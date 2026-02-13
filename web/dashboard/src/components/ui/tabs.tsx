'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const TabsContext = React.createContext<{
    value: string;
    onValueChange: (value: string) => void;
} | null>(null);

const TabsRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { defaultValue?: string; value?: string; onValueChange?: (value: string) => void }
>(({ className, defaultValue, value: controlledValue, onValueChange, ...props }, ref) => {
    const [localValue, setLocalValue] = React.useState(defaultValue || "");
    const value = controlledValue !== undefined ? controlledValue : localValue;
    
    const contextValue = React.useMemo(() => ({
        value,
        onValueChange: (newValue: string) => {
            if (controlledValue === undefined) {
                setLocalValue(newValue);
            }
            onValueChange?.(newValue);
        }
    }), [value, controlledValue, onValueChange]);

    return (
        <TabsContext.Provider value={contextValue}>
            <div ref={ref} className={cn("", className)} {...props} />
        </TabsContext.Provider>
    );
});
TabsRoot.displayName = "Tabs";

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error("TabsTrigger must be used within Tabs");
    
    return (
        <button
        ref={ref}
        type="button"
        onClick={() => context.onValueChange(value)}
        className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            context.value === value 
                ? "bg-white text-gray-950 shadow-sm" 
                : "hover:bg-gray-200/50 hover:text-gray-900",
            className
        )}
        {...props}
        />
    )
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error("TabsContent must be used within Tabs");
    
    if (context.value !== value) return null;

    return (
        <div
            ref={ref}
            className={cn(
            "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 animate-in fade-in-50 zoom-in-95 duration-100 ease-out",
            className
            )}
            {...props}
        />
    );
});
TabsContent.displayName = "TabsContent";

export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent };
