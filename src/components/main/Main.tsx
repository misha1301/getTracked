import React from 'react';
import { ScrollAreaFlex, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils.ts';

function MainRoot({ children, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'w-full h-full bg-(--color-component-background) overflow-hidden rounded-t-[20px] flex border-solid border-t-(length:--border-width) border-(--border-color)',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function Main({ children, className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main className={cn('h-full grow w-5 flex flex-col ', className)} {...props}>
      {children}
    </main>
  );
}

function MainContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaFlex>) {
  return (
    <ScrollAreaFlex
      className={cn(
        'min-h-0 w-full grow flex flex-col scroll-smooth bg-(--color-component-background)',
        className,
      )}
      {...props}
      viewportClassName="p-[10px] md:p-[24px] [&>div]:grow [&>div]:flex [&>div]:flex-col flex flex-col"
    >
      {children}
      <ScrollBar orientation='vertical' className='w-[7px] md:w-[10px] mr-[2px] md:mr-[5px]'></ScrollBar>
    </ScrollAreaFlex>
  );
}

function MainHeader({ children, className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header
      className={cn(
        'flex shrink-0 items-center w-full h-[48px] px-[10px] md:px-[25px] border-b-(length:--border-width) z-20  border-(--border-color) border-solid',
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
}

function MainSidebar({ children, className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav className={cn(className)} {...props}>
      {children}
    </nav>
  );
}

export default {
  Root: MainRoot,
  Main: Main,
  Content: MainContent,
  ContentHeader: MainHeader,
  Sidebar: MainSidebar,
};
