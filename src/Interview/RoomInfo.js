import { useState } from 'react';
import styles from '../../styles/Interview.module.css';

export default function RoomInfo(props) {
  const [clicked, setClicked] = useState(false);

  const student = props.student;
  const room = props.room;

  // This section gonna need a looksy

  const baseURL = 'http://localhost:3000/interview';

  const handleCopy = () => {
    let url = baseURL + '/' + room;
    navigator.clipboard.writeText(url);
    setClicked(true);
  };

  return (
    <div className={styles.roomInfo}>
      <span>
        {student.first_name} {student.last_name}, {student.cohort}
      </span>
      <div
        className={styles.copyRow}
        onClick={handleCopy}
      >
        <img
          src={'/images/copy.svg'}
          alt="/"
          objectfit="contain"
          objectposition="bottom center"
          width={15}
          height={15}
        />
        <div>{clicked ? 'Copied!' : 'Click here to copy student URL'}</div>
        <img
          src={'/images/copy.svg'}
          alt="/"
          objectfit="contain"
          objectposition="bottom center"
          width={15}
          height={15}
        />
      </div>
    </div>
  );
}
