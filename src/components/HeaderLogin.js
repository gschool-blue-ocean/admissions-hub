import styles from "./Header.module.css";
import { useRouter } from "next/router";

function HeaderLogin() {
  let currentPage = "";
  let { asPath } = useRouter();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = monthNames[today.getMonth()];
  var yyyy = today.getFullYear();
  today = mm + ", " + dd + " " + yyyy;

  const router = useRouter();

  return (
    <>
      <div className={styles.header}>
        {asPath !== "/login" ? (
          <button
            className={styles.logo}
            onClick={goLink}
            name="dashboard"
          ></button>
        ) : (
          <button className={styles.logo} name="dashboard"></button>
        )}

        <div className={styles.para}>
          {asPath !== "/login" ? (
            <div className={styles.innerPara}>{currentPage}</div>
          ) : (
            <div className={styles.innerLoginPara}>{currentPage}</div>
          )}
        </div>
        <div className={styles.para2}>{today}</div>
      </div>
    </>
  );
}

export default HeaderLogin;
