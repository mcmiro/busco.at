import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const spacerVariants = cva('', {
  variants: {
    size: {
      xs: 'h-4',
      sm: 'h-8',
      md: 'h-16',
      lg: 'h-24',
      xl: 'h-32',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface SpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spacerVariants> {}

export interface SpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spacerVariants> {}
const Spacer = ({ className, size, ...props }: SpacerProps) => {
  return (
    <div className={cn(spacerVariants({ size, className }))} {...props}></div>
  );
};

export default Spacer;
