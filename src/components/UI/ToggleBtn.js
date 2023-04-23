import { useState } from 'react';

import classes from './ToggleBtn.module.css';

const ToggleBtn = ({ toggled /*onClick*/ }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    /*onClick(!isToggled);*/
  };

  return (
    <label>
      <input
        type='checkbox'
        defaultChecked={isToggled} /*onClick={callback}*/
      />
      <span />
    </label>
  );
};

export default ToggleBtn;
