import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';

import classes from './PartialExam.module.css';

const PartialExam = (props) => {
  const partialExam = props.data;
  return (
    <>
      <div className={classes.tableInfoLineSpace}>
        <div className={classes.tableInfoLine}></div>
      </div>
      <div className={classes.partialExam}>
        <div className={classes.examSpace}></div>
        <p className={classes.examName}>{partialExam.name}</p>
        <p className={classes.examType}></p>
        <p className={classes.examDate}>{partialExam.date}</p>
        <p className={classes.examDemand}>{partialExam.demand}</p>
        <p className={classes.examDificultFactor}>
          {partialExam.dificultFactor}{' '}
        </p>
        <div className={classes.examResults}>
          <FontAwesomeIcon className={classes.icon} icon={faFileInvoice} />
        </div>
      </div>
    </>
  );
};

export default PartialExam;
