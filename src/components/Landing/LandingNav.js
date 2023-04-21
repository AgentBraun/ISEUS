import React from 'react';
import styles from './LandingNav.module.css';

const LandingNav = (props) => {
    return (
        <React.Fragment>
            <ul className={styles['navBar-meni']}>
                <li>
                    <a href='#'>O nama</a>
                </li>
                <li>
                    <a href='#'>Kontakt</a>
                </li>
                <li>
                    <a href='#'>Novosti</a>
                </li>
                <li>
                    <a href='#'>Prijava grešaka</a>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default LandingNav;
