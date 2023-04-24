import classes from './ButtonToggle.module.css';

const ToggleBtn = ({ toggled, onClick }) => {
  //const [toggled, setToggle] = useState(toggled);

  const callback = () => {
    onClick(toggled);
  };

  return (
    <label className={classes}>
      <input type='checkbox' defaultChecked={toggled} onClick={callback} />
      <span />
    </label>
  );
};

export default ToggleBtn;
