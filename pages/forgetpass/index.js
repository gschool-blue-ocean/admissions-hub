import Forgetpass from "../../src/Forgetpass/Forgetpass";
import Header from '../../src/Shared/Header';
import styles from '../../styles/Login.module.css';
import Footer from '../../src/Shared/Footer';

export default function Forgotpass() {
  return (
    <div className={styles.Login}>
      <Header />
      <Forgetpass />
      <Footer />
    </div>
  );
}
