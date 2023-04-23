import Toggle from '../../UI/ButtonToggle';

import classes from './SubjectInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileArrowDown,
  faPenToSquare,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import ButtonBlue from '../../UI/ButtonBlue';

const SubjectInfo = () => {
  return (
    <div className={classes.subjectInfo}>
      <div className={classes.navbar}>
        <div className={classes.editInfoBtn}>
          <div className={classes.editBtn}>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faPenToSquare}
              style={{ color: '#ffffff' }}
            />
          </div>
          <div className={classes.infoBtn}>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faCircleInfo}
              style={{ color: '#ffffff' }}
            />
          </div>
        </div>
        <h2>Podaci o predmetu</h2>
        <Toggle toggled={true} />
      </div>
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
            <p>Preuzmite QR kod od predmeta</p>
            <ButtonBlue>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faFileArrowDown}
                style={{ color: '#ffffff' }}
              />
            </ButtonBlue>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectInfo;
