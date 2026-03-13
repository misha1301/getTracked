import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar.tsx';

import { SidebarLink } from '@/components/ui/link.tsx';
import { useTranslation } from 'react-i18next';
import { sidebarMenuItems } from '@/configs/menuLinks.tsx';

function DesktopSidebar({sideBarData}: {sideBarData: sidebarMenuItems}){
  const { t } = useTranslation();

  return (
    <Sidebar variant='sidebar'>
      <SidebarHeader className='flex w-full  items-end p-[15px_15px_0_15px]'>
        <SidebarTrigger className='size-9 w-[36px]' />
      </SidebarHeader>
      <SidebarContent className='p-[15px]'>
        <SidebarMenu>
          {sideBarData.mainItems.map((menuItem) => (
            <SidebarMenuItem key={t(menuItem.titleKey)}>
              <SidebarLink
                key={menuItem.key}
                to={menuItem.urlTo}
                className='gap-[8px] group-data-[collapsible=icon]:px-[6px]'
              >
                {typeof menuItem.icon === 'function' ? menuItem.icon({}) : null}
                <span className='group-data-[collapsible=icon]:overflow-hidden truncate'>
                  {t(menuItem.titleKey)}
                </span>
              </SidebarLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className='p-[15px]'>
        {sideBarData.footerItems.map((menuItem) => (
          <SidebarLink
            key={menuItem.key}
            to={menuItem.urlTo}
            className='gap-[8px] group-data-[collapsible=icon]:p-[6px]'
          >
            {typeof menuItem.icon === 'function' ? menuItem.icon({}) : null}
            <span className='group-data-[collapsible=icon]:overflow-hidden truncate'>
              {t(menuItem.titleKey)}
            </span>
          </SidebarLink>
        ))}
      </SidebarFooter>
    </Sidebar>
  );
}

export default DesktopSidebar;
