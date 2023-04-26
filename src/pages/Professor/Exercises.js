import Exercise from '../../components/Body/professors/LectureExercise';
import ButtonBordered from '../../components/UI/Buttons/ButtonBordered';

import classes from './Exercises.module.css';

const DUMMY_EXERCISES = [
  {
    index: '1',
    name: 'Uvod u baze podataka',
    duration: '3',
    date: '20.02.2023',
  },
  {
    index: '2',
    name: 'Razvojni ciklus baze podataka',
    duration: '3',
    date: '27.02.2023',
  },
];

const ExercisesPage = () => {
  return (
    <div className={classes.exercisesPage}>
      <h2 className={classes.title}>Vježbe</h2>
      <div className={classes.exercisesInfo}>
        <p>Broj održanih vježbi: 2</p>
        <p>Preostali broj časova: 39</p>
      </div>
      <div className={classes.exercises}>
        <div className={classes.tableInfo}>
          <p className={classes.exerciseIndex}>RB</p>
          <p className={classes.exerciseName}>Naslov vježbi</p>
          <p className={classes.exerciseDuration}>broj časova</p>
          <p className={classes.exerciseDate}>Datum vježbi</p>
          <p className={classes.exerciseScan}>Skeniranje</p>
          <p className={classes.exerciseQR}>QR</p>
        </div>
        <div className={classes.tableInfoLine}></div>
        {DUMMY_EXERCISES.map((exercise) => (
          <Exercise key={exercise.index} info={exercise} />
        ))}
      </div>
      <ButtonBordered className={classes.button}>+</ButtonBordered>
    </div>
  );
};

export default ExercisesPage;
