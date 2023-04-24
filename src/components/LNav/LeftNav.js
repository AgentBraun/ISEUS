import ButtonB from '../UI/Buttons/ButtonBordered';

import classes from './LeftNav.module.css';

const LeftNav = () => {
  return (
    <nav className={classes.nav}>
      <p className={classes.logo}>ISEUS</p>
      <h1>Predmeti</h1>
      <ButtonB active>Osnove Baza Podataka</ButtonB>
      <ButtonB>+</ButtonB>
    </nav>
  );
};

export default LeftNav;
