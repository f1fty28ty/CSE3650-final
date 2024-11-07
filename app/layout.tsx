// app/layout.tsx

import React, { PropsWithChildren } from 'react';
import Layout from '../components/layout/layout'; // Import your consolidated layout component
import './globals.css'; // Import global styles

export const metadata = {
  title: 'Causality Computing',
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <style>{`
          /* Critical CSS here */
          body {
            margin: 0;
            font-family: Arial, sans-serif;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}