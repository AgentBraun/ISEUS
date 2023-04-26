import ButtonToggle from '../../../components/UI/Buttons/ButtonToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faQrcode } from '@fortawesome/free-solid-svg-icons';

import classes from './LectureExercise.module.css';

const LectureExamLine = (props) => {
  const toggleHandler = () => {};

  const data = props.info;
  return (
    <div className={classes.lecture}>
      <p className={classes.lectureIndex}>{data.index}</p>
      <p className={classes.lectureName}>{data.name}</p>
      <p className={classes.lectureDuration}>{data.duration}</p>
      <p className={classes.lectureDate}>{data.date}</p>
      <div className={classes.lectureScan}>
        <ButtonToggle onClick={toggleHandler} toggled={true}></ButtonToggle>
      </div>
      <div className={classes.qr}>
        <FontAwesomeIcon className={classes.icon} icon={faFileArrowDown} />
        <FontAwesomeIcon
          className={classes.icon + ' ' + classes.secondIcon}
          icon={faQrcode}
        />
      </div>
    </div>
  );
};

export default LectureExamLine;
