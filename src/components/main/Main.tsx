import React, { PropsWithChildren } from 'react';

type TLoginProps = PropsWithChildren;

const MainRoot: React.FC<TLoginProps> = ({ children }) => {
  return (
    <div className="w-full h-full bg-[#181818] overflow-hidden rounded-t-[20px] flex grow border-solid border-t-[0.5px] border-[#2F2F2F]">
      {children}
    </div>
  );
};

const MainContent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="h-full grow overflow-y-scroll flex flex-col scroll-smooth p-[24px] bg-[#181818]"  >
      {children}
    </main>
  );
};

const MainDrawer: React.FC<PropsWithChildren> = ({ children }) => {
  return <nav className={"w-[300px]"}>{children}</nav>;
};

export default { Root: MainRoot, Content: MainContent, Drawer: MainDrawer };
