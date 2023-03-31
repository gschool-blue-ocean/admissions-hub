import { useState } from "react";
import styles from "../../styles/Interview.module.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function RoomInfo({ student, archivedStudent, room }) {
  const [clicked, setClicked] = useState(false);

  // This section gonna need a looksy

  const baseURL = "http://localhost:3000/interview";

  const handleCopy = () => {
    let url = baseURL + "/" + room;
    navigator.clipboard.writeText(url);
    setClicked(true);
  };

  return (
    <div className={styles.roomInfo}>
      {student ? (
        <span>
          {student.first_name} {student.last_name}, {student.cohort}
        </span>
      ) : (
        <span>
          {archivedStudent.first_name} {archivedStudent.last_name},{" "}
          {archivedStudent.cohort}
        </span>
      )}
      {student ? (
        <Tippy
          content="Copied"
          trigger="click"
          delay={(25, 50)}
          onShow={(e) =>
            setTimeout(() => {
              e.hide();
            }, 1200)
          }
        >
          <div className={styles.copyRow} onClick={handleCopy}>
            <img
              src={"/images/copy.svg"}
              alt="/"
              objectfit="contain"
              objectposition="bottom center"
              width={15}
              height={15}
            />

            <div>{"Click here to copy student URL"}</div>

            <img
              src={"/images/copy.svg"}
              alt="/"
              objectfit="contain"
              objectposition="bottom center"
              width={15}
              height={15}
            />
          </div>
        </Tippy>
      ) : null}
    </div>
  );
}
