import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

// Metadata can be used by Next.js to set default HTML <head> values
export const metadata = {
  title: 'Celestial Security',
  description:
    'Protecting your digital universe with next-generation security solutions.',
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