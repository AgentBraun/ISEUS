import classes from './ExistingUser.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDeleteLeft,
  faCircleCheck,
  faUserXmark,
} from '@fortawesome/free-solid-svg-icons';

const ExistingUser = (props) => {
  const user = props.userData;

  const action = () => {
    if (props.action === 'delete') {
      return (
        <div>
          <FontAwesomeIcon className={classes.icon} icon={faDeleteLeft} />
        </div>
      );
    }
    if (props.action === 'acceptOrDecline') {
      return (
        <div>
          <FontAwesomeIcon
            className={classes.iconAccept}
            icon={faCircleCheck}
          />
          <FontAwesomeIcon className={classes.icon} icon={faDeleteLeft} />
        </div>
      );
    }
  };

  return (
    <div className={classes.existingUser}>
      <div className={classes.name}>{`${user.title} ${user.name}`}</div>
      <div className={classes.action}>{action()}</div>
    </div>
  );
};

export default ExistingUser;
