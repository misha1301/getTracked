import React from 'react';
import { cn } from '@/lib/utils.ts';

type BadgeType = React.HTMLAttributes<HTMLElement>;

export const TextAreaBadge: React.FC<BadgeType> = ({className, children}) => {

  return (
    <span className={cn("z-10 absolute hover:cursor-pointer top-[5px] right-[6px] text-[14px] text-[#4C5058] font-medium", className)}>
      {children}
    </span>
  )
}