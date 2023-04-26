import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';

import classes from './Exam.module.css';

const Exam = (props) => {
  const exam = props.data;

  return (
    <div className={classes.exam}>
      <p className={classes.examName}>{exam.name} </p>
      <p className={classes.examPartial}></p>
      <p className={classes.examType}>{exam.type} </p>
      <p className={classes.examDate}>{exam.date}</p>
      <p className={classes.examDemand}>{exam.demand} </p>
      <p className={classes.examDificultFactor}>{exam.dificultFactor}</p>
      <p className={classes.examResults}>
        <FontAwesomeIcon className={classes.icon} icon={faFileInvoice} />
      </p>
    </div>
  );
};

export default Exam;
