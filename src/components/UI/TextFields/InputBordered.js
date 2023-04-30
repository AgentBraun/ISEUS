import React from 'react';

import classes from './InputBordered.module.css';

const InputBordered = (props) => {
  return (
    <input
      className={classes.input}
      type={props.type}
      onChange={props.onChange}
      name={props.name}
    />
  );
};

export default InputBordered;
