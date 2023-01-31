import CodeEditor from '../../src/Interview/CodeEditor';
import Dashboard from '../../src/Interview/Dashboard';
import Header from '../../src/Shared/Header';
import Footer from '../../src/Shared/Footer';
import { useEffect, useState } from 'react';
import RoomInfo from '../../src/Interview/RoomInfo';
import Loading from '../../src/Shared/loading/Loading';
import axios from 'axios';
import auth from '../../lib/auth';
import { useRouter } from 'next/router';
import styles from '../../styles/Interview.module.css';

export default function Interview() {
  const [data, setData] = useState({});
  const [student, setStudent] = useState({});
  const [role, setRole] = useState(false);
  const [authed, setAuthed] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // this little check ensures that the id is loaded from the router. It's slow. (relative to useEffect trigger)
    if (!id) {
      return;
    }
    setTimeout(() => {
      auth(
        () => {
          setRole(true), setAuthed(true);
        },
        () => {
          setRole(false), setAuthed(true);
        }
      );
    }, 1000);
    getInterviewData();
  }, [id]);

  function getInterviewData() {
    axios
      .get(`/api/interviews/${id}`)
      .then((result) => result.data)
      .then((data) => {
        setData(data);
        console.log(data);
        getCandidateData(data.candidate_id);
      })
      .catch((err) => console.log(err));
  }

  function getCandidateData(id) {
    axios
      .get(`/api/candidate/${id}`)
      .then((result) => result.data)
      .then((data) => {
        setStudent(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return authed ? (
    <div className={styles.interviewPage}>
      <Header />
      <div className={styles.interviewContent}>
        <CodeEditor sessionId={id} />

        {role ? (
          <div className={styles.adminColumn}>
            <RoomInfo
              student={student}
              room={data.id}
            />
            <Dashboard />
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  ) : (
    <Loading />
  );
}
