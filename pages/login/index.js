import { useEffect } from 'react';
import AdminLogin from './AdminLogin';
import { useAppContext } from '../../src/components/GlobalContext';
import { MDBFooter } from 'mdb-react-ui-kit';
import styles from './LoginPageStyle.module.css';
import HeaderLogin from '../../src/components/HeaderLogin';

export default function Login() {
  const { showWarning, user, setUser } = useAppContext();

  return (
    <>
      <div>
        <HeaderLogin />
      </div>
      {showWarning && (
        <div className={styles.warning}>
          <p>***Wrong username or password</p>
        </div>
      )}
      <div
        className="position-absolute container"
        style={{
          top: '34.5%',
          left: '50%',
          width: 600,
          transform: ' translate(-50%)',
        }}
      >
        <AdminLogin />
      </div>
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
        <div className="fixed-bottom text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2023 Copyright: Team Exterminators
        </div>
      </MDBFooter>
    </>
  );
}
