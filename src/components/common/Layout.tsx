import React, { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header />
      <main style={{ paddingTop: isHome ? '0' : 'var(--total-header-height)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
