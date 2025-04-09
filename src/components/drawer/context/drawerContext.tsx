import React from 'react';
import useAutoSave from '@/hooks/useAutoSave.ts';
import useLocalStorage from '@/hooks/useLocalStorage.ts';

type TDrawerPosition = 'static' | 'fixed';
type TDrawerPlacement = 'start' | 'end' | 'top' | 'bottom';

const DRAWER_LOCAL_STORAGE_KEY = 'drawer';

export interface IDrawer {
  isOpen: boolean;
  isCollapsed: boolean;
  drawerPosition: TDrawerPosition;
  drawerPlacement: TDrawerPlacement;
}

export interface IDrawerContext extends IDrawer {
  setIsOpen: (isOpen: boolean | ((prevState: boolean) => boolean)) => void;
  setIsCollapsed: (isMinimized: boolean | ((prevState: boolean) => boolean)) => void;
  setDrawerPosition: (
    position: TDrawerPosition | ((prevState: TDrawerPosition) => TDrawerPosition),
  ) => void;
  setDrawerPlacement: (
    placement: TDrawerPlacement | ((prevState: TDrawerPlacement) => TDrawerPlacement),
  ) => void;
}

const DrawerDefaultParams: IDrawer = {
  isOpen: true,
  isCollapsed: false,
  drawerPosition: 'static',
  drawerPlacement: 'start',
};

const DrawerContext = React.createContext<IDrawerContext | null>(null);
export default DrawerContext;

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const store = useLocalStorage<boolean>(DRAWER_LOCAL_STORAGE_KEY);

  const [isCollapsed, setIsCollapsed] = useAutoSave<boolean>({
    store,
    initialValue: DrawerDefaultParams.isCollapsed,
  });

  const [isOpen, setIsOpen] = React.useState(DrawerDefaultParams.isOpen);
  const [drawerPosition, setDrawerPosition] = React.useState<TDrawerPosition>(DrawerDefaultParams.drawerPosition);
  const [drawerPlacement, setDrawerPlacement] = React.useState<TDrawerPlacement>(DrawerDefaultParams.drawerPlacement);

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isCollapsed,
        setIsCollapsed,
        drawerPosition,
        setDrawerPosition,
        drawerPlacement,
        setDrawerPlacement,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};