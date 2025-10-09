import HomeClient from '../components/HomeClient';
import type { FC } from 'react';

// Metadata for the home page
export const metadata = {
  title: 'Celestial Security – Cyber Security Solutions',
  description:
    'Celestial Security protects your digital universe with next-generation cyber security solutions.',
};

const HomePage: FC = () => {
  return <HomeClient />;
};

export default HomePage;