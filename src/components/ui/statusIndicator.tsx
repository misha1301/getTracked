import * as React from 'react';

import { cn } from '@/lib/utils';

enum IndicatorStatus {
  Active = 'active',
  Inactive = 'inactive',
  Failed = 'failed',
}

type TIndicator = React.ComponentProps<'div'> & {type: IndicatorStatus};

function StatusIndicator({ className, type, ...props }: TIndicator) {
  return <div data-slot={type} className={cn('rounded-full shrink-0 aspect-square h-[11px] w-[11px] bg-(--gtr-color-muted-foreground) transition-[background] duration-300 data-[slot=active]:bg-(--gtr-color-active-foreground) data-[slot=failed]:bg-(--gtr-color-error-foreground)', className)} {...props} />;
}

export { StatusIndicator, IndicatorStatus };
