import React from 'react';

import { NavLink, NavLinkProps, useLocation, useResolvedPath } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { TNavLinkItem } from '../../configs/menuLinks.tsx';

export type TBreadcrumbItemType = 'item' | 'ellipsis';

export type TBreadcrumbItem = TNavLinkItem & {
  itemType: TBreadcrumbItemType;
  children: TNavLinkItem[] | null;
};

export type TBreadcrumbItems = TBreadcrumbItem[];

type TNavBreadcrumbProps = React.ComponentProps<'ol'> & {
  navItems: TBreadcrumbItems;
};

const NavBreadcrumb: React.FC<TNavBreadcrumbProps> = (props) => {
  const { navItems, ...rest } = props;

  return (
    <Breadcrumb>
      <BreadcrumbList {...rest}>
        {navItems.map((navItem, index) => {
          const isLast = index === navItems.length - 1;

          switch (navItem.itemType) {
            case 'item':
              return (
                <>
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink asChild>
                      <NavLink to={navItem.urlTo}>{navItem.titleKey}</NavLink>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </>
              );
            case 'ellipsis':
              return (
                <>
                  <BreadcrumbItem key={index}>
                    <BreadcrumbEllipsis className='h-4 w-4' />
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </>
              );
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavBreadcrumb;
