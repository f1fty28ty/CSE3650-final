// File: components/layout/Layout.tsx
import React from 'react';
import HamburgerMenu from './HamburgerMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <HamburgerMenu />
      <main>{children}</main>
    </div>
  );
};

export default Layout;