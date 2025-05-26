import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar.tsx';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { SidebarLink } from '@/components/ui/link.tsx';
import { useTranslation } from 'react-i18next';
import { sidebarMenuLinks, menuItem } from '@/configs/menuLinks.tsx';
import { useSidebar } from '@/components/ui/sidebar';

function DesktopSidebar() {
  const { t } = useTranslation();

  const { state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar } = useSidebar();

  return (
    <Sidebar variant='sidebar'>
      <SidebarHeader className='flex w-full  items-end p-[15px_15px_0_15px]'>
        <SidebarTrigger className='size-9 w-[36px]' />
      </SidebarHeader>
      <SidebarContent className='p-[15px]'>
        <SidebarMenu>
          {sidebarMenuLinks.mainItems.map((menuItem: menuItem) => (
            <SidebarMenuItem key={t(menuItem.titleKey)}>
              <SidebarLink
                key={menuItem.key}
                to={menuItem.urlTo}
                className='gap-[8px] group-data-[collapsible=icon]:px-[6px]'
              >
                {typeof menuItem.icon === 'function' ? menuItem.icon({}) : null}
                <span className='group-data-[collapsible=icon]:overflow-hidden'>
                  {t(menuItem.titleKey)}
                </span>
              </SidebarLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className='p-[15px]'>
        {sidebarMenuLinks.footerItems.map((menuItem: menuItem) => (
          <SidebarLink
            key={menuItem.key}
            to={menuItem.urlTo}
            className='gap-[8px] group-data-[collapsible=icon]:p-[6px]'
          >
            {typeof menuItem.icon === 'function' ? menuItem.icon({}) : null}
            <span className='group-data-[collapsible=icon]:overflow-hidden'>
              {t(menuItem.titleKey)}
            </span>
          </SidebarLink>
        ))}
      </SidebarFooter>
    </Sidebar>
  );
}

export default DesktopSidebar;
