import React, { useState } from 'react';
import GetTrackedLogo from '@/assets/GetTrackedLogo.tsx';
import { Outlet } from 'react-router-dom';
import Main from '../components/main/Main.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import menuBurgerSvg from '../assets/menu_burger.svg';
import { isMobile } from 'react-device-detect';
import { useIsMobile } from '@/hooks/use-mobile.ts';
import { useTranslation } from 'react-i18next';
import useAutoSave from '@/hooks/useAutoSave.ts';
import useLocalStorage from '@/hooks/useLocalStorage.ts';
import DesktopSidebar from '@/components/menu/SideBar.tsx';


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
} from '@/components/ui/sidebar';

import SvgWrapper from '@/components/wrappers/SvgWrapper.tsx';
import NavBreadcrumb, { TBreadcrumbItem } from '@/components/navigation/NavBreadcrumb.tsx';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

type TUserLayoutProps = {
  footer?: React.ReactNode | undefined;
};

const UserLayout: React.FC<TUserLayoutProps> = (props) => {
  const [isMenuOpened, setIsMenuOpened] = useAutoSave<boolean>({store: useLocalStorage<boolean>("sideBarState"), initialValue: true});
  const [isOpened, setIsOpened] = useAutoSave<boolean>({store: useLocalStorage<boolean>("sideBar"), initialValue: true});

  const isMobileScreen = useIsMobile();

  const {t} = useTranslation();

  const routes = [
    { path: "/", breadcrumb: "/ " },
    { path: "/hone", breadcrumb: "Home" },
    { path: "/home/runners", breadcrumb: t("menu.items.runner") },
    {
      path: "/home/rules",
      breadcrumb: "Rules",
      props: { someProp: "Hi" },
    },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  const breadcrumbItems = breadcrumbs.map(({ match, breadcrumb}): TBreadcrumbItem => {
    return { itemType: 'item', key: match.pathname, titleKey: breadcrumb, urlTo: match.pathname };
  });

  console.log(breadcrumbItems)

  return (
    <div className='h-dvh'>
      <header className='h-[73px]'>
        <div className='w-auto h-full flex items-center justify-between px-[19px] md:px-[26px]'>
          <GetTrackedLogo height='35' />
          <div className='flex items-center gap-[10px]'>
            <Avatar className='rounded-none'>
              <AvatarFallback className='rounded-[10px]'>Mi</AvatarFallback>
            </Avatar>
            <p className='sm'>Misha</p>
          </div>
        </div>
      </header>
      <main className='h-[calc(100%-73px)] relative'>
        <SidebarProvider open={isMenuOpened} onOpenChange={setIsMenuOpened}>
          <Main.Root>
            {!isMobile && <DesktopSidebar />}
            <Main.Main>
              <Main.ContentHeader>
                {isMobile ? (
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button className='p-0 border-none h-auto bg-transparent hover:bg-transparent hover:cursor-pointer'>
                        <SvgWrapper className='h-[14px]'>
                          <img className='h-full object-contain' src={menuBurgerSvg} />
                        </SvgWrapper>
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className='h-[calc(100%-73px)] data-[vaul-drawer-direction=bottom]:rounded-[20px]'>
                      <DrawerHeader>
                        <DrawerTitle>Drawer Title</DrawerTitle>
                      </DrawerHeader>
                      <DrawerFooter>
                        <Button>Save</Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                ) : (
                  isMobileScreen && <SidebarTrigger />
                )}
                <NavBreadcrumb navItems={breadcrumbItems} />
              </Main.ContentHeader>
              <Main.Content>
                <Outlet />
              </Main.Content>
            </Main.Main>
          </Main.Root>
        </SidebarProvider>
      </main>
    </div>
  );
};

export default UserLayout;
