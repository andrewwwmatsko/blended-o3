import { Link } from 'react-router-dom';

import styles from './GoBackBtn.module.css';

export const GoBackBtn = ({ pathname }) => {
  return (
    <Link className={styles.link} to={pathname}>
      Go Back
    </Link>
  );
};
