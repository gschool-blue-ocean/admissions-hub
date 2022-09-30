import styles from "./Header.module.css";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRouter } from "next/router";
import BtnInterviewer from "./BtnInterviewer";
import BtnLogin from './BtnLogin';


function Header() {
  let currentPage = "";
  let currentUser = "";
  let { asPath } = useRouter();

  switch (asPath) {
    case "/dashboard":
      currentPage = "Interview Dashboard";
      currentUser = "Danny Andrews";
      break;
    case "/login":
      currentPage = "Interview Login";
      currentUser = "";
      break;
  }

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

  const router = useRouter()
  function goLink(event, data) {
      // console.log()
      if (event.target.name === 'dashboard') {
          router.push('../dashboard')
      } else if (event.target.name === 'interviewer') {
          router.push('../interviewer')
      }
  }
  return (
    <>
      <div className={styles.header}>
        {/* <div className={styles.logo}></div> */}
        <button
        className={styles.logo}
        onClick={goLink}
        name='interviewer'
        >
        </button>
        

        <div className={styles.para}>
          <div className={styles.innerPara}>{currentPage}</div>
        </div>
        <div className={styles.para2}>{today}</div>
        <div className={styles.para3}>{currentUser}</div>
      </div>
    </>
  );
}

export default Header;
