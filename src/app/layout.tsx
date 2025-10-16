import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

// Metadata can be used by Next.js to set default HTML <head> values

// Metadata for the home page
export const metadata = {
  title: 'Celestial Security – Cyber Security Solutions',
  description:
    'Celestial Security protects your digital universe with next-generation cyber security solutions.',
    icons: {
    icon: [
      { url: "/favicon.ico" }, // default fallback
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Main page content injected here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}