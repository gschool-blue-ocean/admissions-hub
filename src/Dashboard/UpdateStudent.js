import axios from 'axios';
import { useState } from 'react';
import styles from '../../styles/Dashboard.module.css';

// Here is an array of cohort values to simplify the drop down menu code.
const cohorts = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

// This component is a pop-out form that lets you input and create new candidate data
export default function UpdateStudent(props) {
  const [firstName, setFirstName] = useState(props.student.first_name);
  const [lastName, setLastName] = useState(props.student.last_name);
  const [email, setEmail] = useState(props.student.email);
  const [cohort, setCohort] = useState(props.student.cohort);

  // Posts data to DB via API. See /api/candidate for more.
  function updateCandidate() {
    let data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      cohort: cohort
    };
    axios.patch('/api/candidate/' + props.student.id, data).then((response) => {
      console.log(response);
      props.getCandidates();
      props.setShowUpdateStudentForm(false);
    });
  }

  return (
    <div className={styles.newStudentShadow}>
      <div className={styles.newStudentCard}>
        <div style={{ fontSize: '1.5rem' }}>Update Candidate Info</div>
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
            value={props.student.cohort}
            disabled
            selected
            hidden
            // This throws a nextjs error but it works so nextjs can suck it.
            // It lets placeholder text appear without setting the value of the select element.
          >
            {props.student.cohort}
          </option>
          {cohorts.map((num) => (
            <option key={num}> MCSP-{num}</option>
          ))}
        </select>
        <div className={styles.spacedButtons}>
          <div
            className={styles.launchButton}
            onClick={() => props.setShowUpdateStudentForm(false)}
          >
            Cancel
          </div>
          {firstName && lastName && email && cohort ? (
            <div
              className={styles.launchButton}
              onClick={updateCandidate}
            >
              Create
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
