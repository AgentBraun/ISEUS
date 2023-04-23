import ToggleBtn from '../../UI/ToggleBtn';

import classes from './SubjectInfo.module.css';

const SubjectInfo = () => {
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.editInfoBtn}>
          <div className={classes.editBtn}>Ed</div>
          <div className={classes.infoBtn}>i</div>
        </div>
        <h2>Podaci o predmetu</h2>
        <ToggleBtn toggled={true} />
      </div>
    </>
  );
};

export default SubjectInfo;
