import { Code2, Container, LucideProps, Settings } from 'lucide-react';

enum SIDEBAR_MENU_KEYS {
  RUNNERS = 'runners',
  RULES = 'rules',
  SETTINGS = 'settings',
}

export type TNavLinkItem = {
  key: string;
  titleKey: string;
  urlTo: string;
};

export type menuItem = TNavLinkItem & {
  icon: ((props: LucideProps) => JSX.Element) | null;
};

export type sidebarMenuItems = {
  mainItems: menuItem[];
  footerItems: menuItem[];
};

const iconMap: Record<IconKey, (props: LucideProps) => JSX.Element> = {
  runners: (props) => (
    <Container height='22px' strokeWidth={1.25} className=' shrink-0' {...props} />
  ),
  rules: (props) => <Code2 height='22px' strokeWidth={1.25} className=' shrink-0' {...props} />,
  settings: (props) => (
    <Settings height='22px' strokeWidth={1.25} className='shrink-0' {...props} />
  ),
};

function getIcon(key: IconKey) {
  return iconMap?.[key];
}

export const sidebarMenuLinks: sidebarMenuItems = {
  mainItems: [
    {
      key: SIDEBAR_MENU_KEYS.RUNNERS,
      titleKey: 'menu.items.runner',
      urlTo: '/home/runners',
      icon: getIcon(SIDEBAR_MENU_KEYS.RUNNERS),
    },
    {
      key: SIDEBAR_MENU_KEYS.RULES,
      titleKey: 'menu.items.rules',
      urlTo: '/home/rules',
      icon: getIcon(SIDEBAR_MENU_KEYS.RULES),
    },
  ],
  footerItems: [
    {
      key: SIDEBAR_MENU_KEYS.SETTINGS,
      titleKey: 'menu.items.settings',
      urlTo: '/home/settings',
      icon: getIcon(SIDEBAR_MENU_KEYS.SETTINGS),
    },
  ],
};

type IconKey = (typeof SIDEBAR_MENU_KEYS)[keyof typeof SIDEBAR_MENU_KEYS];


