import Exam from '../../components/Body/professors/Exam';
import PartialExam from '../../components/Body/professors/PartialExam';
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
        name: 'prva parcijala',
        date: '15.03.2023',
        dificultFactor: '20/100',
      },
      {
        id: '2',
        name: 'druga parcijala',
        date: '10.06.2023',
        dificultFactor: '20/100',
      },
    ],
  },
  {
    id: '2',
    name: 'Završni ispit',
    type: 'pismeni',
    date: '25.06.2023',
    demand: '',
    dificultFactor: '50/100',
  },
];

const ExamsPage = () => {
  return (
    <div className={classes.examsPage}>
      <h2 className={classes.title}>Ispiti</h2>
      <div className={classes.tableInfo}>
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
          <Exam data={exam} />
          {exam.partialExams &&
            exam.partialExams.map((partialExam) => (
              <PartialExam data={partialExam} />
            ))}
          <div className={classes.tableInfoLineThin}></div>
        </>
      ))}
    </div>
  );
};

export default ExamsPage;
