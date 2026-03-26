import React from 'react';
import { cn } from '@/lib/utils.ts';

type TContentContentFrame = React.HTMLAttributes<HTMLElement> & {maxFrameWidth: string};

const ContentFrame: React.FC<TContentContentFrame> = (props) => {
  const { children, className, maxFrameWidth, ...rest } = props;

  return (
    <section className={cn("mx-auto w-full", `max-w-[${maxFrameWidth}]`,className)} {...rest}>
      {children}
    </section>
  )
}

type TDivProps = React.HTMLAttributes<HTMLDivElement>;

const ContentBoard: React.FC<TDivProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={cn(
        'flex flex-col rounded-[16px] w-full max-w-[1200px] p-[5px] bg-[#1E1E1E] shadow-[1px_1px_5px_0px_rgba(0,_0,_0,_0.25)]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const ContentSection: React.FC<TDivProps> = (props) => {
  const {children, className, ...rest} = props
  return(
    <div className={cn("w-full grid grid-cols-2 px-[15px] my-[14px] [&:has(>:only-child)]:grid-cols-1", className)} {...rest}>
      {children}
    </div>  
  )
}

const SectionTitle: React.FC<TDivProps> = (props) => {
  const {children, className, ...rest} = props
  return(
    <div className={cn("flex justify-self-start", className)} {...rest}>
      {children}
    </div>
  )
}

const SectionUtils: React.FC<TDivProps> = (props) => {
  const {children, className, ...rest} = props
  return(
    <div className={cn("flex justify-self-end", className)} {...rest}>
      {children}
    </div>
  )
}

type TBoardHeaderProps = React.HTMLAttributes<HTMLHeadingElement>;

const BoardHeader: React.FC<TBoardHeaderProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <header className={cn('flex p-[10px] empty:p-0', className)} {...rest}>
      {children}
    </header>
  );
};

type THeaderIconProps = React.HTMLAttributes<HTMLDivElement>;

const HeaderIcon: React.FC<THeaderIconProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn('flex flex-col items-center justify-center aspect-square h-[25px] w-[25px] empty:h-0', className)}  {...rest}>
      {children}
    </div>
  );
};

type TBoardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const BoardFooter: React.FC<TBoardFooterProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn('flex px-[10px] text-[14px] leading-[17px] text-[#4C5058] empty:p-0 mt-4 mb-2', className)} {...rest}>
      {children}
    </div>
  );
};

type TBoardContentProps = React.HTMLAttributes<HTMLDivElement>;

const BoardContent: React.FC<TBoardContentProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn('w-full flex flex-col gap-y-[16px] gap-x-[8px]', className)} {...rest}>
      {children}
    </div>
  );
};

type TBoardContentGroupProps = React.HTMLAttributes<HTMLDivElement>;

const ContentGroup: React.FC<TBoardContentGroupProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={cn(
        'w-full gap-y-[16px] gap-x-[8px] grid grid-cols-[repeat(auto-fit,minmax(max(350px,40%),1fr))]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

type TBoardLogicBoxProps = React.HTMLAttributes<HTMLDivElement>;

const LogicBox: React.FC<TBoardLogicBoxProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn('w-full has-disabled:text-[#4C5058]', className)} {...rest}>
      {children}
    </div>
  );
};

type TBoardLogicBoxLabelProps = React.HTMLAttributes<HTMLDivElement> &{ muted?: boolean};

const LogicBoxLabel: React.FC<TBoardLogicBoxLabelProps> = ({ children, className, muted, ...rest }) => {
  return (
    <div className={cn('text-[14px] leading-[17px] px-[10px] mb-[8px]',`${muted && "text-(--gtr-color-muted-foreground)"}`, className)} {...rest}>
      {children}
    </div>
  );
};

const ErrorLabel: React.FC<TBoardLogicBoxLabelProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn('hidden group-aria-invalid:flex empty:hidden text-[13px] text-[#CF3434] leading-[16px] px-[10px] mt-[6px]', className)} {...rest}>
      {children}
    </div>
  );
};

type TBoardLogicBlockProps = React.HTMLAttributes<HTMLDivElement>;

const LogicBlock: React.FC<TBoardLogicBlockProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn(
        'w-full h-9 relative rounded-[11px] flex items-center',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export {
  ContentFrame,
  ContentBoard,
  ContentSection,
  SectionTitle,
  SectionUtils,
  BoardHeader,
  HeaderIcon,
  BoardContent,
  BoardFooter,
  ContentGroup,
  LogicBox,
  LogicBoxLabel,
  ErrorLabel,
  LogicBlock,
};
