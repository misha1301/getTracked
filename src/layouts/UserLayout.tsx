import React, { useState } from 'react';
import GetTrackedLogo from '@/assets/GetTrackedLogo.tsx';
import { Outlet } from 'react-router-dom';
import { Avatar, Box, Button, CloseButton, Drawer, HStack, Text } from '@chakra-ui/react';
import { Portal } from '../components';
import Main from '../components/main/Main.tsx';
import { DrawerProvider } from '@/components/drawer/context/drawerContext.tsx';
import CustomDrawer from '@/components/drawer/drawer.tsx';
type TUserLayoutProps = {
  footer?: React.ReactNode | undefined;
};

import { useMediaQuery } from '@chakra-ui/react';

const UserLayout: React.FC<TUserLayoutProps> = (props) => {
  const [isSmallScreen] = useMediaQuery(['(max-width: 768px)'], { ssr: false });

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <Box height='100dvh'>
      <DrawerProvider>
        <Box as='header' height='73px'>
          <HStack
            w={'100%'}
            h='100%'
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            px={{ base: '19px', md: '26px' }}
          >
            <GetTrackedLogo height='35px' />
            <HStack>
              <Avatar.Root variant={'subtle'} rounded='10px' size='sm'>
                <Avatar.Fallback name='Misha' />
              </Avatar.Root>
              <Text textStyle='sm'>Misha</Text>
            </HStack>
          </HStack>
        </Box>
        <Box as='main' height='calc(100% - 73px)'>
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
                <Portal id='portal'>
                  <CustomDrawer.Root frozen={false} isOpen={true} isCollapsed={true} drawerPosition="fixed" drawerPlacement="start">
                    draver custom
                  </CustomDrawer.Root>

                  <Drawer.Backdrop />
                  <Drawer.Positioner>
                    <Drawer.Content roundedTop={'0px'}>
                      <Drawer.Header>
                        <Drawer.Title>Drawer Title</Drawer.Title>
                      </Drawer.Header>
                      <Drawer.Context>
                        {(store) => (
                          <Drawer.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                          </Drawer.Body>
                        )}
                      </Drawer.Context>
                      <Drawer.Footer>
                        <Drawer.ActionTrigger asChild>
                          <Button variant='outline' onClick={() => setIsMenuOpened(false)}>
                            Cancel
                          </Button>
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
        </Box>
      </DrawerProvider>
    </Box>
  );
};

export default UserLayout;
