import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileInvoice,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

import classes from './Exam.module.css';

const Exam = (props) => {
  const exam = props.data;

  return (
    <div className={classes.exam}>
      <div className={classes.examEdit}>
        <FontAwesomeIcon icon={faPenToSquare} className={classes.icon} />
      </div>
      <p className={classes.examName}>{exam.name} </p>
      <p className={classes.examPartial}></p>
      <p className={classes.examType}>{exam.type} </p>
      <p className={classes.examDate}>{exam.date}</p>
      <p className={classes.examDemand}>{exam.demand} </p>
      <p className={classes.examDificultFactor}>{exam.dificultFactor}</p>
      <div className={classes.examResults}>
        <FontAwesomeIcon className={classes.icon} icon={faFileInvoice} />
      </div>
    </div>
  );
};

export default Exam;
