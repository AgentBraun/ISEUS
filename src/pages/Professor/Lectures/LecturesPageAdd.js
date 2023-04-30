import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import classes from './LecturesPageAdd.module.css';
import InputBordered from '../../../components/UI/TextFields/InputBordered';
import ButtonBordered from '../../../components/UI/Buttons/ButtonBordered';
import ButtonBorderedWide from '../../../components/UI/Buttons/ButtonBorderedWide';

const LecturesPageAdd = () => {
  const [lecture, setLecture] = useState({
    title: '',
    duration: null,
    date: '',
    scaning: 0,
    qrCode: 'alsjdfčlasjf234234324',
    subjectID: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLecture((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:8800/profesori/dodajPredavanje',
        lecture
      );
      navigate('/profesori');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.lecturesPageAdd}>
      <h2 className={classes.title}>Dodaj novo predavanje</h2>
      <div className={classes.form}>
        <div className={classes.inputGroup}>
          <label htmlFor='title'>Naslov predavanja</label>
          <InputBordered type={'text'} onChange={handleChange} name={'title'} />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor='duration'>Broj Časova</label>
          <InputBordered
            type={'number'}
            onChange={handleChange}
            name={'duration'}
          />
        </div>
        <p>Preostali broj časova: 35</p>
        <div className={classes.inputGroup}>
          <label htmlFor='date'>Datum predavanja</label>
          <InputBordered type={'date'} onChange={handleChange} name={'date'} />
        </div>
        <div className={classes.button}>
          <ButtonBordered>Generiši QR kod</ButtonBordered>
        </div>
        <ButtonBorderedWide onClick={handleClick}>
          Dodaj novo predavanje
        </ButtonBorderedWide>
      </div>
    </div>
  );
};

export default LecturesPageAdd;
