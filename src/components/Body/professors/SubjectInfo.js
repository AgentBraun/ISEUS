import { useState } from 'react';

import Toggle from '../../UI/Buttons/ButtonToggle';

import classes from './SubjectInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileArrowDown,
  faPenToSquare,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

const SubjectInfo = () => {
  const [toggled, setToggled] = useState(true);

  const toggleHandler = (toggled) => {
    setToggled(!toggled);
  };

  return (
    <div
      className={
        toggled
          ? classes.subjectInfo
          : classes.subjectInfo + ' ' + classes.active
      }
    >
      <div className={classes.navbar}>
        <div className={classes.editInfoBtn}>
          <div className={classes.editBtn}>
            <FontAwesomeIcon icon={faPenToSquare} className={classes.icon} />
          </div>
          <div className={classes.infoBtn}>
            <FontAwesomeIcon className={classes.icon} icon={faCircleInfo} />
          </div>
        </div>
        <h2>Podaci o predmetu</h2>
        <Toggle onClick={toggleHandler} toggled={toggled} />
      </div>
      {toggled && (
        <div className={classes.body}>
          <div className={classes.info}>
            <div className={classes.keys}>
              <p>Predmet ID</p>
              <p>Naziv Predmeta</p>
              <p>ECTS bodovi</p>
              <p>Semestar</p>
              <p>Studijski program</p>
              <p>Fakultet</p>
              <p>Univerzitet</p>
            </div>
            <div className={classes.values}>
              <p>0001</p>
              <p>Osnove Baza Podataka</p>
              <p>7</p>
              <p>III - treći</p>
              <p>Softversko Inženjerstvo - SI</p>
              <p>Politehnički fakultet - PTF</p>
              <p>Univerzitet u Zenici - UNZE</p>
              <p></p>
            </div>
          </div>

          <div className={classes.qrCode}>
            <div className={classes.qr}></div>
            <div className={classes.text}>
              <p>Preuzmite QR kod</p>

              <FontAwesomeIcon
                className={classes.icon}
                icon={faFileArrowDown}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectInfo;
