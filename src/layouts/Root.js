import { Outlet } from 'react-router-dom';

import classes from './Root.module.css';

import LandingNav from '../components/UNav/LandingNav';

function RootLayout() {
  return (
    <>
      <LandingNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
