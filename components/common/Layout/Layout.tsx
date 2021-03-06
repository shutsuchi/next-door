import s from './Layout.module.css';

import { FC } from 'react';
import { Footer, Navbar } from '@components/common';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';
import { useUIContext } from '@components/ui/context';
import { ApiProvider } from '@framework';

const Layout: FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUIContext();

  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
          <CartSidebar />
        </Sidebar>
        <main className='fit'>{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};

export default Layout;
