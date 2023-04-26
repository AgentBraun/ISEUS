import classes from './PartialExam.module.css';

const PartialExam = (props) => {
  const partialExam = props.data;
  return (
    <div className={classes.partialExam}>
      <p className={classes.examName}>{partialExam.name}</p>
      <p className={classes.exam}></p>
    </div>
  );
};

export default PartialExam;
