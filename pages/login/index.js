import LoginCard from './LoginCard';
import Header from '../../src/components/Header';
import styles from './Login.module.css';
import styles2 from './Footer.module.css';

export default function Login() {
  return (
    <div className={styles.Login}>
      <Header />
      <LoginCard />
      <div
        className={styles2.footer}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2023 Copyright: Team 3
      </div>
    </div>
  );
}
