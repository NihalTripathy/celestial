import HomeClient from '../components/HomeClient';
import type { FC } from 'react';

export const metadata = {
  title: "Celestial Security – Cyber Security Solutions",
  description:
    "Celestial Security protects your digital universe with next-generation cyber security solutions.",
  alternates: {
    canonical: "/",
  },
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

const HomePage: FC = () => {
  return <HomeClient />;
};

export default HomePage;