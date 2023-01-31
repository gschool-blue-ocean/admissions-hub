import LoginCard from '../../src/Login/LoginCard';
import Header from '../../src/Shared/Header';
import styles from '../../styles/Login.module.css';
import Footer from '../../src/Shared/Footer';

export default function Login() {
  return (
    <div className={styles.Login}>
      <Header />
      <LoginCard />
      <Footer />
    </div>
  );
}
