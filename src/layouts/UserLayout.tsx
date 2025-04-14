import React, { useState } from 'react';
import GetTrackedLogo from '@/assets/GetTrackedLogo.tsx';
import { Outlet } from 'react-router-dom';
import Main from '../components/main/Main.tsx';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type TUserLayoutProps = {
  footer?: React.ReactNode | undefined;
};

const UserLayout: React.FC<TUserLayoutProps> = (props) => {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className='h-dvh'>
      <header className='h-[73px]'>
        <div className='w-auto h-full flex items-center justify-between px-[19px] md:px-[26px]'>
          <GetTrackedLogo height='35px' />
          <div>
            <Avatar className='rounded-xl'>
              <AvatarFallback>Misha</AvatarFallback>
            </Avatar>
            <p className='sm'>Misha</p>
          </div>
        </div>
      </header>
      <main className='h-[calc(100%-73px)]'>
        <Main.Root>
          {!isSmallScreen ? (
            <Main.Drawer>Menu Drawer</Main.Drawer>
          ) : (
            <Drawer.Root placement={'start'} size={'xs'}>
              <Drawer.Trigger asChild>
                <Button variant='outline' size='sm' onClick={() => setIsMenuOpened(true)}>
                  Open
                </Button>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content roundedTop={'0px'}>
                    <Drawer.Header>
                      <Drawer.Title>Drawer Title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Context>
                      {
                        (store) => (
                          <Drawer.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                          </Drawer.Body>
                        )
                      }
                    </Drawer.Context>
                    <Drawer.Footer>
                      <Drawer.ActionTrigger asChild>
                        <Button variant='outline' onClick={() => setIsMenuOpened(false)}>Cancel</Button>
                      </Drawer.ActionTrigger>
                      <Button>Save</Button>
                    </Drawer.Footer>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          )}
          <Main.Content>
            <Outlet />
          </Main.Content>
        </Main.Root>
      </main>
    </div>
  );
};

export default UserLayout;
