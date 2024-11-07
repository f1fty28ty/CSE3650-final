// app/layout.tsx

import React, { PropsWithChildren } from 'react';
import Layout from '../components/layout/layout'; // Import your consolidated layout component
import './globals.css'; // Import global styles

export const metadata = {
  title: 'Causality Computing',
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;