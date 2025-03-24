import { ReactNode } from 'react';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-dvh w-full flex flex-col'>
      {children}
    </div>
  );
}

export default AppLayout;
