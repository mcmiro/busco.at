import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {
  asChild?: boolean;
}

const listVariants = cva('list-none m-0 p-0');

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'ul';
    return (
      <Comp className={cn(listVariants({ className }))} ref={ref} {...props} />
    );
  }
);
List.displayName = 'List';

export default List;
