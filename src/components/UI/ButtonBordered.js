import styles from './ButtonBordered.module.css';

import React from 'react';

const ButtonBordered = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default ButtonBordered;
