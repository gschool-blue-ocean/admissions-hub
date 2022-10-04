import styles from "./Header.module.css";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRouter } from "next/router";
import BtnLogin from './BtnLogin';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

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
      }
  }

  return (
    <>
      <div className={styles.header}>
        {/* <div className={styles.logo}></div> */}
        <button
        className={styles.logo}
        onClick={goLink}
        name='dashboard'
        >
        </button>
        

        <div className={styles.para}>
          <div className={styles.innerPara}>{currentPage}</div>
        </div>
        <div className={styles.para2}>{today}</div>
        {/* <div className={styles.para3}>{currentUser}</div> */}

      <div className={styles.dropdownmenu}>
        <Dropdown as={ButtonGroup} >
        <Dropdown.Toggle id="dropdown-custom-1" className="btn-light">{currentUser}</Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
          <Dropdown.Item eventKey="2">Extra page</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4"><BtnLogin /></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>

      </div>
    </>
  );
}

export default Header;
