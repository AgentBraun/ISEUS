import { NavLink } from 'react-router-dom';

import classes from './ProfessorsNav.module.css';

const ProfessorsNav = () => {
  return (
    <headers className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/profesori/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Nastavnici
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profesori/predavanja'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Predavanja
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profesori/vjezbe'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Vježbe
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profesori/ispiti'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Ispiti
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profesori/studenti'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Studenti
            </NavLink>
          </li>
        </ul>
        <p className={classes.title}>prof. dr. Niko Nikić</p>
      </nav>
    </headers>
  );
};

export default ProfessorsNav;
