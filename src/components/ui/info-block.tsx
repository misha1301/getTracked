import React from 'react';
import { cn } from '@/lib/utils.ts';

type TContentBoardProps = React.HTMLAttributes<HTMLDivElement>;

const InfoBlock: React.FC<TContentBoardProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={cn(
        'flex flex-col w-full bg-[#181818] rounded-[11px] shadow-foreground overflow-hidden' +
        'border-[#1E1E1E] *:data-text-info:border-b-[0.5px] *:data-text-info:last:border-none *:data-text-info:only:border-none ',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const InfoRow: React.FC<TContentBoardProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-text-info="info-text"
      className={cn(
        'flex w-full leading-[17px]  p-[12px_10px] justify-between ',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const RowBadgeContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className,children, ...rest}) => {
  return (
    <div
      className={cn('flex gap-1.5', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

const InfoText: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className,children, ...rest}) => {

  return (
    <div
      className={cn('flex', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export {InfoBlock, InfoRow, RowBadgeContainer, InfoText}