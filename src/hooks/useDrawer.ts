import { useContext } from 'react';
import DrawerContext, { IDrawerContext } from '@/components/drawer/context/drawerContext.tsx';

const useDrawer = (): IDrawerContext => {
  return useContext(DrawerContext) as IDrawerContext;
};

export default useDrawer;
