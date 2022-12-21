import styles from "./Body.module.css";
import Dashboard from "./Dashboard";

function Body() {
  return (
    <div className={styles.body} >
      <div>Body here</div>
      <Dashboard />
    </div>
  );
}

export default Body;
