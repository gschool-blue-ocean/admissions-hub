import styles from "./Body.module.css";
import Dashboard from "./Dashboard";
import InterviewDash from "./InterviewDash";

function Body() {
  return (
    <div className={styles.body}>
      <div>Body here</div>
      <InterviewDash />
      {/* <Dashboard /> */}
    </div>
  );
}

export default Body;
