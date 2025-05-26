import React from 'react';
import { NavLink, NavLinkProps, useLocation, useResolvedPath } from 'react-router-dom';
import { cn } from '@/lib/utils.ts';

type ExtendedNavLinkProps = NavLinkProps & {
  label?: string;
};

export const SidebarLink: React.FC<ExtendedNavLinkProps> = ({
  to,
  label,
  className,
  children,
  ...rest
}) => {
  const location = useLocation();
  const resolvedPath = useResolvedPath(to.toString());

  const isExactMatch = location.pathname === resolvedPath.pathname;
  const isPartialMatch = location.pathname.startsWith(resolvedPath.pathname) && !isExactMatch;

  const computedClass = cn(
    'h-[36px] px-[12px] shrink-0 rounded-[10px] flex items-center w-auto transition- duration-200 ease-in-out text-(--color-text-navlink) hover:bg-(--color-navlink-active)',
    {
      'bg-(--color-navlink-active)': isExactMatch,
      'border border-(--color-navlink-active)': isPartialMatch
    },
    className
  );

  return (
    <NavLink to={resolvedPath} className={computedClass} {...rest}>
        {children ?? label}
    </NavLink>
  );
};
