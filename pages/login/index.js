import LoginCard from './LoginCard';
import Header from '../../src/components/Shared-Comps/Header';
import styles from '../../styles/Login.module.css';
import Footer from '../../src/components/Shared-Comps/Footer';

export default function Login() {
  return (
    <div className={styles.Login}>
      <Header />
      <LoginCard />
      <Footer />
    </div>
  );
}
