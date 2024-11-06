import { Inter } from "next/font/google";
import "./globals.css";
import HamburgerMenu from "../components/layout/HamburgerMenu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neon-paleBlue`}>
        <HamburgerMenu />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}