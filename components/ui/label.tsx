"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<

  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants> & { inputValue?: string }
>(({ className, inputValue, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), 'absolute left-2 cursor-text text-sm transition-all group-focus-within:-translate-y-full pointer-events-none', { "-translate-y-full text-": inputValue }, className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
