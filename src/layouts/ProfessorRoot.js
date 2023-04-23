import { Outlet } from 'react-router-dom';

import ProfessorsNav from '../components/UNav/ProfessorsNav';
import LeftNav from '../components/LNav/LeftNav';

import classes from './ProfessorRoot.module.css';

function professorsRootLayout() {
  return (
    <>
      <div className={classes.professorBody}>
        <div className={classes.leftNav}>
          <LeftNav />
        </div>
        <div className={classes.upperNav}>
          <ProfessorsNav />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default professorsRootLayout;
