import LandingNav from '../components/UNav/LandingNav';

import { Outlet } from 'react-router-dom';

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
