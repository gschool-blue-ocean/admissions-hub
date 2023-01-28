import CodeEditor from '../../src/components/CodeEditor';
import Dashboard from '../../src/components/Dashboard';
import Header from '../../src/components/Shared-Comps/Header';
import Footer from '../../src/components/Shared-Comps/Footer';
import { useEffect, useState } from 'react';
import RoomURL from '../../src/components/RoomURL';
import { useAppContext } from '../../src/components/GlobalContext';
import Loading from '../../src/components/Shared-Comps/loading/Loading';
import axios from 'axios';
import auth from '../../lib/auth';
//import {importStudent} from "../../lib/importStudent";

function id({ id }) {
  const { user, info, setInterview } = useAppContext();
  const [userRole, setUserRole] = useState('');
  const [valid, setValid] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      auth(
        () => setValid(true),
        () => Router.push('/login')
      );
    }, 1000);
  }, []);

  useEffect(() => {
    axios
      .get(`/api/interviews/${id}`)
      .then((result) => {
        //console.log('got id', result.data[0])
        setInterview(result.data[0]);
      })
      .catch(console.log);

    if (!user) return;
    if (user.role) {
      //console.log('user', user.role)
      localStorage.setItem('userRole', JSON.stringify(user.role));
      setUserRole(user.role);
    } else {
      if (typeof window !== 'undefined') {
        let temp = JSON.parse(localStorage.getItem('userRole'));
        //console.log('user role', temp)
        setUserRole(temp);
      }
    }
  }, []);

  return !valid ? (
    <Loading />
  ) : info.complete ? (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
          zIndex: '1'
        }}
      >
        {userRole === 'ADMIN' ? (
          <div style={{ width: 'calc(100% - 450px)' }}>
            <CodeEditor
              sessionId={id}
              candidateInfo={info.id}
            />
          </div>
        ) : (
          <div
            style={{
              width: '900px',
              position: 'relative',
              left: '50%',
              transform: 'translate(-50%, 0%)'
            }}
          >
            <CodeEditor
              sessionId={id}
              candidateInfo={info.id}
            />
          </div>
        )}
        {userRole === 'ADMIN' ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              right: 0
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                zIndex: '1',
                right: '0%',
                height: '100%',
                width: '450px',
                marginTop: '15px',
                color: '#979797'
              }}
            >
              <RoomURL URL={id} />
              <Dashboard />
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
          zIndex: '1'
        }}
      >
        {userRole === 'ADMIN' ? (
          <div style={{ width: 'calc(100% - 450px)' }}>
            <CodeEditor
              sessionId={id}
              candidateInfo={info.id}
            />
          </div>
        ) : (
          <div
            style={{
              width: '900px',
              position: 'relative',
              left: '50%',
              transform: 'translate(-50%, 0%)'
            }}
          >
            <CodeEditor
              sessionId={id}
              candidateInfo={info.id}
            />
          </div>
        )}
        {userRole === 'ADMIN' ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              right: 0
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                zIndex: '1',
                right: '0%',
                height: '100%',
                width: '450px',
                marginTop: '15px',
                color: '#979797'
              }}
            >
              <RoomURL URL={id} />
              <Dashboard />
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
}

export default id;

export async function getServerSideProps({ query }) {
  let { id } = query;
  return { props: { id } };
}
