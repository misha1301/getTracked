import React from 'react';
import { cn } from '@/lib/utils.ts';

type TContentBoardProps = React.HTMLAttributes<HTMLDivElement>;

const ContentBoard: React.FC<TContentBoardProps> = (props) => {
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

type TBoardHeaderProps = React.HTMLAttributes<HTMLHeadingElement>;

const BoardHeader: React.FC<TBoardHeaderProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <header className={cn('flex p-[10px] empty:p-0', className)} {...rest}>
      {children}
    </header>
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
    <div className={cn('w-full gap-y-[16px] gap-x-[8px] grid grid-cols-[repeat(auto-fit,minmax(max(350px,40%),1fr))]', className)} {...rest}>
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

type TBoardLogicBoxLabelProps = React.HTMLAttributes<HTMLDivElement>;

const LogicBoxLabel: React.FC<TBoardLogicBoxLabelProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn('text-[14px] px-[10px] leading-[17px] mb-[8px]', className)} {...rest}>
      {children}
    </div>
  );
};

type TBoardLogicBlockProps = React.HTMLAttributes<HTMLDivElement>;

const LogicBlock: React.FC<TBoardLogicBlockProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn('w-full rounded-[11px] relative', className)} {...rest}>
      {children}
    </div>
  );
};

export {
  ContentBoard,
  BoardHeader,
  BoardContent,
  ContentGroup,
  LogicBox,
  LogicBoxLabel,
  LogicBlock,
};
