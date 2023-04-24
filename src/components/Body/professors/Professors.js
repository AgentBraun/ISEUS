import ExistingUser from '../misc/ExistingUser';
import classes from './Professors.module.css';

const DUMMY_DATAex = [
  { title: 'prof. dr.', name: 'Niko Nikić', action: 'delete' },
  { title: 'As.', name: 'Nikola Nikić', action: 'delete' },
];

const DUMMY_DATAnew = [
  { title: 'As.', name: 'Niko Neznanović', action: 'acceptOrDecline' },
  { title: 'Prof.', name: 'Nikola Nikić', action: 'acceptOrDecline' },
];

const ProfessorsPage = () => {
  return (
    <div className={classes.professorsPage}>
      <h2 className={classes.title}>Nastavnici</h2>
      <div className={classes.body}>
        <div className={classes.existingProfesors}>
          <h3>Postojeći profesori</h3>
          {DUMMY_DATAex.map((data) => (
            <ExistingUser
              userData={{ title: data.title, name: data.name }}
              action={data.action}
            />
          ))}
        </div>
        <div className={classes.professorsRequest}>
          <h3>Zahtjevi za pristup predmetu</h3>
          {DUMMY_DATAnew.map((data) => (
            <ExistingUser
              userData={{ title: data.title, name: data.name }}
              action={data.action}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessorsPage;
