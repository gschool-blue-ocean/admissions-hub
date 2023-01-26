import LoginCard from './LoginCard';
import Header from '../../src/components/Header';
import styles from './Login.module.css';
import Footer from '../../src/components/Footer';

export default function Login() {
  return (
    <div className={styles.Login}>
      <Header />
      <LoginCard />
      <Footer />
    </div>
  );
}
