import React, { useState } from 'react';
import GetTrackedLogo from '@/assets/GetTrackedLogo.tsx';
import { Outlet } from 'react-router-dom';
import Main from '../components/main/Main.tsx';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMediaQuery } from 'usehooks-ts';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider, 
  SidebarTrigger 
} from "@/components/ui/sidebar"


type TUserLayoutProps = {
  footer?: React.ReactNode | undefined;
};

const UserLayout: React.FC<TUserLayoutProps> = (props) => {

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div className='h-dvh'>
      <header className='h-[73px]'>
        <div className='w-auto h-full flex items-center justify-between px-[19px] md:px-[26px]'>
          <GetTrackedLogo height='35px' />
          <div className='flex items-center gap-[10px]'>
            <Avatar className='rounded-none'>
              <AvatarFallback className='rounded-[10px]' >Mi</AvatarFallback>
            </Avatar>
            <p className='sm'>Misha</p>
          </div>
        </div>
      </header>
      <main className='h-[calc(100%-73px)]'>
        
        <Main.Root>
        <SidebarProvider>
          {!isSmallScreen ? (
            <Sidebar>
              <SidebarContent>
                Links
              </SidebarContent>
              <SidebarFooter>
                Settings
              </SidebarFooter>
            </Sidebar>
          ) : (
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant='outline' size='sm'>
                  Open
                </Button>
              </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Drawer Title</DrawerTitle>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button>Save</Button>
                    </DrawerFooter>
                  </DrawerContent>
            </Drawer>
          )}
          <SidebarTrigger />
        </SidebarProvider>
          <Main.Content>
            <Outlet />
          </Main.Content>
        </Main.Root>
      </main>
    </div>
  );
};

export default UserLayout;
