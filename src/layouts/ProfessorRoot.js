import { Outlet } from 'react-router-dom';

import ProfessorsNav from '../components/UNav/ProfessorsNav';
import LeftNav from '../components/LNav/LeftNav';

import classes from './ProfessorRoot.module.css';
import SubjectInfo from '../components/Body/professors/SubjectInfo';

function professorsRootLayout() {
  return (
    <>
      <div className={classes.professorBody}>
        <div className={classes.leftNav}>
          <LeftNav />
        </div>
        <div className={classes.upperNav}>
          <ProfessorsNav />
          <SubjectInfo />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default professorsRootLayout;
