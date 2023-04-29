import { NavLink, useNavigate } from 'react-router-dom';

import classes from './LandingNav.module.css';

const LandingNav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profesori');
  };

  return (
    <header className={classes.page}>
      <div className={classes.header}>
        <p className={classes.logo}>ISEUS</p>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Početna
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/onama'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                O nama
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/kontakt'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Kontakt
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/novosti'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Novosti
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/prijavagresaka'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Prijava grešaka
              </NavLink>
            </li>
          </ul>
        </nav>
        <button type='button' onClick={handleClick} className={classes.button}>
          Prijavi se
        </button>
      </div>
    </header>
  );
};

export default LandingNav;
