import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Lecture from '../../components/Body/professors/LectureExercise';
import ButtonBordered from '../../components/UI/Buttons/ButtonBordered';

import classes from './Lectures.module.css';

const LecturesPage = () => {
  let counter = 1;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetschAllLectures = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8800/profesori/predavanja'
        );
        setData([...res.data]);
      } catch (err) {
        console.log(err);
      }
    };
    fetschAllLectures();
  }, []);

  const navigateHandler = (e) => {
    e.preventDefault();
    navigate('dodajPredavanja');
  };

  return (
    <div className={classes.lecturesPage}>
      <h2 className={classes.title}>Predavanja</h2>
      <div className={classes.lecturesInfo}>
        <p>
          Broj održanih predavanja: {data.length}
          {console.log(data)}
        </p>
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
        {data.map((lecture) => (
          <Lecture counter={counter++} key={lecture.id} info={lecture} />
        ))}
      </div>
      <ButtonBordered onClick={navigateHandler}>+</ButtonBordered>
    </div>
  );
};

export default LecturesPage;
