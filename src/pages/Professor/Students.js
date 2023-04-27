import BtnBordered from '../../components/UI/Buttons/ButtonBorderedWide';

import classes from './Students.module.css';

const StudentsPage = () => {
  return (
    <div className={classes.studentsPage}>
      <h2 className={classes.title}>Studenti</h2>
      <BtnBordered>Zahtjevi studenata za pristup predmetu</BtnBordered>
      <BtnBordered>Pregled svih studenata na predmetu</BtnBordered>
      <BtnBordered>Pregled stanja prisustva</BtnBordered>
      <BtnBordered>Pregled stanja bodova na ispitima</BtnBordered>
      <BtnBordered>
        Pregled stanja bodova na predmetnim aktivnostima
      </BtnBordered>
      <BtnBordered>Ukupni pregled svih bodova i konačne ocjene</BtnBordered>
    </div>
  );
};

export default StudentsPage;
