import classes from './Buttonblue.module.css';

const ButtonBlue = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default ButtonBlue;
