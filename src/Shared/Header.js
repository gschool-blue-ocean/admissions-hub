import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/router';

function Header() {
  const [currentPage, setCurrentPage] = useState('');
  const [showDD, setShowDD] = useState(false);
  const { asPath } = useRouter();
  const router = useRouter();

  function toProfile() {
    router.push('/profile');
  }

  function toLogin() {
    localStorage.clear();
    router.push('/login');
  }

  function toDash() {
    router.push('/dashboard');
  }

  useEffect(() => {
    switch (asPath) {
      case '/interview':
        setCurrentPage('');
        setShowDD(true);
        break;
      case '/login':
        setCurrentPage('');
        setShowDD(false);
        break;
      case `/dashboard`:
        setCurrentPage('');
        setShowDD(true);
        break;
      case '/profile':
        setCurrentPage('');
        setShowDD(true);
        break;
    }
  }, []);

  const now = new Date();
  const today = now.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <div className={styles.header}>
      {showDD ? (
        <button
          className={styles.logo}
          onClick={toDash}
          name="dashboard"
        ></button>
      ) : (
        <button
          className={styles.logo}
          name="dashboard"
        ></button>
      )}
      <div className={styles.spacer}></div>
      <div className={styles.date}>{today}</div>

      {showDD ? (
        <div className={styles.dropdownmenu}>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={`Welcome, ${localStorage.getItem('firstName')}`}
            menuVariant="light"
          >
            <NavDropdown.Item onClick={toProfile}>View Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={toLogin}>Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
