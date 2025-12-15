import React from 'react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils.ts';

type TInputProps = React.ComponentProps<'input'>;
type TTextAreaProps = React.HTMLAttributes<HTMLTextAreaElement>;

const InputCustom = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <Input
        ref={ref}
        className={cn(
          'rounded-[11px] text-[14px] px-[10px] field-sizing-content ',
          'group-aria-invalid:focus-visible:border-[#CF3434] group-aria-invalid:animate-shake',
          'group-aria-invalid:border group-aria-invalid:ring-destructive/20 dark:group-aria-invalid:ring-destructive/40 group-aria-invalid:border-[#CF3434]',
          className
        )}
        {...rest}
      />
    );
  },
);

const TextareaCustom = React.forwardRef<HTMLTextAreaElement, TTextAreaProps>(
  ({ className, ...rest }, ref) => {
    return (
      <Textarea
        ref={ref}
        className={cn('rounded-[11px] text-[14px] px-[10px] field-sizing-content', className)}
        {...rest}
      />
    );
  },
);

export { InputCustom, TextareaCustom };
