import { useNavigate } from 'react-router-dom';
import Lecture from '../../components/Body/professors/LectureExercise';
import ButtonBordered from '../../components/UI/Buttons/ButtonBordered';

import classes from './Lectures.module.css';

const DUMMY_LECTURES = [
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

const LecturesPage = () => {
  const navigate = useNavigate();

  const navigateHandler = (e) => {
    e.preventDefault();
    navigate('dodajPredavanja');
  };

  return (
    <div className={classes.lecturesPage}>
      <h2 className={classes.title}>Predavanja</h2>
      <div className={classes.lecturesInfo}>
        <p>Broj održanih predavanja: 2</p>
        <p>Preostali broj časova: 39</p>
      </div>
      <div className={classes.lectures}>
        <div className={classes.tableInfo}>
          <p className={classes.lectureIndex}>RB</p>
          <p className={classes.lectureName}>Naslov predavanja</p>
          <p className={classes.lectureDuration}>broj časova</p>
          <p className={classes.lectureDate}>Datum predavanja</p>
          <p className={classes.lectureScan}>Skeniranje</p>
          <p className={classes.lectureQR}>QR</p>
        </div>
        <div className={classes.tableInfoLine}></div>
        {DUMMY_LECTURES.map((lecture) => (
          <Lecture key={lecture.index} info={lecture} />
        ))}
      </div>
      <ButtonBordered onClick={navigateHandler}>+</ButtonBordered>
    </div>
  );
};

export default LecturesPage;
