import React from 'react';
import { Outlet } from 'react-router-dom';
// import "./client-layout.css";

function ClientLayout() {
  return (
    <>
      <header className='client__hader h-0.1 outline-1 outline-dashed outline-[#878787ba]'>
        <h1 className=''>Client layout header</h1>
      </header>
      <main className='client__main h-100 grow outline-1 outline-dashed outline-[#fcfcfcba]'>
        <h1>Client layout main</h1>
        <Outlet />
      </main>
      <footer className='client__footer outline-1 outline-dashed outline-[#878787ba]'>
        <h1>Client layout footer</h1>
      </footer>
    </>
  );
}

export default ClientLayout;
