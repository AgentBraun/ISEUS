import classes from './ButtonBorderedWide.module.css';

import React from 'react';

const ButtonBorderedWide = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.children}
    </button>
  );
};

export default ButtonBorderedWide;
