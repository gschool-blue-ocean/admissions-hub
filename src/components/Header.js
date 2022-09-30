import styles from "./Header.module.css";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRouter } from "next/router";

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

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}></div>

        <p className={styles.para}>{currentPage}</p>
        <p className={styles.para2}>{today}</p>
        <p className={styles.para3}>{currentUser}</p>
      </div>
    </>
  );
}

export default Header;
