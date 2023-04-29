import React from 'react';

import classes from './LecturesPageAdd.module.css';

const LecturesPageAdd = () => {
  return (
    <div className={classes.lecturesPageAdd}>
      <h2 className={classes.title}>Dodaj novo predavanje</h2>
      <form action='' className={classes.formAddLecture}>
        <label htmlFor='lectureTitle'>Naslov predavanja</label>
        <input type='text' name={'lectureTitle'} className={classes.inputs} />
      </form>
    </div>
  );
};

export default LecturesPageAdd;
