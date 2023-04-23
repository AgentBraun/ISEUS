//import { useState } from 'react';

import classes from './ButtonToggle.module.css';

const ToggleBtn = ({ toggled /*onClick*/ }) => {
  //onst [isToggled, toggle] = useState(toggled);

  /* const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };*/

  return (
    <label className={classes}>
      <input
        type='checkbox'
        //defaultChecked={isToggled} /*onClick={callback}*/
      />
      <span />
    </label>
  );
};

export default ToggleBtn;
