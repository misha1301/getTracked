import React, { PropsWithChildren, useContext } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { IDrawer, IDrawerContext } from '@/components/drawer/context/drawerContext.tsx';
import DrawerContext from '@/components/drawer/context/drawerContext.tsx';
import useDrawer from '@/hooks/useDrawer.ts';

interface IDrawerComponent extends BoxProps, IDrawer {
  frozen: boolean;
  children: React.ReactNode;
}

const Root: React.FC<IDrawerComponent> = (props) => {

  const {isOpen, setIsOpen} = useDrawer();

  const { children, frozen, isCollapsed, drawerPlacement, drawerPosition,  ...rest } = props;

  React.useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleCloseDrawer = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(false);
    console.log('drawer handleCloseDrawer closed');
  }

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      height="100%"
      width={isOpen ? "100%" : "fitContent"}
      backgroundColor={isOpen? "#181818" : "transparent"}
      opacity="0.8"
      onClick={handleCloseDrawer}
    >
      <Box
        transition='width 200ms ease-in-out'
        overflowY='auto'
        overflowX={frozen ? 'visible' : 'hidden'}
        width={frozen ? '300px' : isOpen ? '300px' : '0'}
        backgroundColor="#1e1e1e"
        {...rest}
      >
        {children}
      </Box>
    </Box>
  )};

export default {Root};
