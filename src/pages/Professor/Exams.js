import Exam from '../../components/Body/professors/Exam';
import PartialExam from '../../components/Body/professors/PartialExam';
import ButtonBordered from '../../components/UI/Buttons/ButtonBordered';

import classes from './Exams.module.css';

const DUMMY_EXAMS = [
  {
    id: '1',
    name: 'Integralni ispit',
    type: 'praktični',
    date: '20.06.2023',
    demand: '',
    dificultFactor: '40/100',
    partialExams: [
      {
        id: '1',
        name: 'Prva parcijala',
        date: '15.03.2023',
        dificultFactor: '20/100',
      },
      {
        id: '2',
        name: 'Druga parcijala',
        date: '10.06.2023',
        dificultFactor: '20/100',
        demand: 'Prva parcijala',
      },
    ],
  },
  {
    id: '2',
    name: 'Završni ispit',
    type: 'pismeni',
    date: '25.06.2023',
    demand: 'Integralni ispit',
    dificultFactor: '50/100',
  },
];

const ExamsPage = () => {
  return (
    <div className={classes.examsPage}>
      <h2 className={classes.title}>Ispiti</h2>
      <div className={classes.tableInfo}>
        <p className={classes.examEdit}>Uredi</p>
        <p className={classes.exam}>Ispit</p>
        <p className={classes.examPartial}>Parcijale</p>
        <p className={classes.examType}>Vrsta ispita</p>
        <p className={classes.examDate}>Datum ispita</p>
        <p className={classes.examDemand}>Uslov</p>
        <p className={classes.examDificultFactor}>Težinski faktor</p>
        <p className={classes.examResults}>Rezultati</p>
      </div>
      <div className={classes.tableInfoLine}></div>
      {DUMMY_EXAMS.map((exam) => (
        <>
          <Exam key={exam.id} data={exam} />
          {exam.partialExams &&
            exam.partialExams.map((partialExam) => (
              <PartialExam key={partialExam.id} data={partialExam} />
            ))}
          <div className={classes.tableInfoLineThin}></div>
        </>
      ))}
      <div className={classes.button}>
        <ButtonBordered>+</ButtonBordered>
      </div>
    </div>
  );
};

export default ExamsPage;
