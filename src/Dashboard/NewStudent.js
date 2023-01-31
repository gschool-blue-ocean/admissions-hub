import axios from 'axios';
import { useState } from 'react';
import styles from '../../styles/Dashboard.module.css';

// Here is an array of cohort values to simplify the drop down menu code.
const cohorts = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

// This component is a pop-out form that lets you input and create new candidate data
export default function NewStudent(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cohort, setCohort] = useState('');

  // Posts data to DB via API. See /api/candidate for more.
  function createCandidate() {
    let data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      cohort: cohort
    };
    axios.post('/api/candidate', data).then((response) => {
      console.log(response);
      props.getCandidates();
      props.setShowNewStudentForm(false);
    });
  }

  return (
    <div className={styles.newStudentShadow}>
      <div className={styles.newStudentCard}>
        <div style={{ fontSize: '1.5rem' }}>Add a New Candidate</div>
        <input
          className={styles.newInput}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
        ></input>
        <input
          className={styles.newInput}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
        ></input>
        <input
          className={styles.newInput}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
        ></input>
        <select
          className={styles.newInput}
          onChange={(e) => {
            setCohort(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option
            value=""
            disabled
            selected
            hidden
            // This throws a nextjs error but it works so nextjs can suck it.
            // It lets placeholder text appear without setting the value of the select element.
          >
            Select Cohort
          </option>
          {cohorts.map((num) => (
            <option key={num}> MCSP-{num}</option>
          ))}
        </select>
        <div className={styles.spacedButtons}>
          <div
            className={styles.launchButton}
            onClick={() => props.setShowNewStudentForm(false)}
          >
            Cancel
          </div>
          {firstName && lastName && email && cohort ? (
            <div
              className={styles.launchButton}
              onClick={createCandidate}
            >
              Create
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
