import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { FaFlagUsa } from 'react-icons/fa';

import styles from './Header.module.css';
import { routes } from '../../routes';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <FaFlagUsa size="40px" color="#0c7bc1" />

          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink
                  to={routes.HOME}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={routes.SEARCHCOUNTRY}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Countries
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
