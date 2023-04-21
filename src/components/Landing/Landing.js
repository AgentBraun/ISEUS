import styles from './Landing.module.css';

import LandingNav from './LandingNav';
import ButtonBordered from '../UI/ButtonBordered';

const Landing = () => {
    return (
        <div className={styles.navBar}>
            <div>ISEUS</div>
            <LandingNav />
            <ButtonBordered>Prijavi se</ButtonBordered>
        </div>
    );
};

export default Landing;
