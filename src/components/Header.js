import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRouter } from "next/router";
import BtnLogin from "./BtnLogin";
import { useAppContext } from "./GlobalContext";

function Header() {
  const { user } = useAppContext();
  let currentPage = "";
  let { asPath } = useRouter();
  //get current access token from local storage
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    let accessToken = localStorage.getItem("accessToken");
    if (!user)return;
    if (user.role) {
      console.log('user role in header', user.role)
      localStorage.setItem("userRole", JSON.stringify(user.role));
      setUserRole(user.role);
      // userInfo = JSON.parse(JSON.stringify(user));
    } else {
      if (typeof window !== "undefined") {
        if (localStorage.getItem('userRole') !== 'ADMIN' || !localStorage.getItem('userRole') || localStorage.getItem('accessToken') === 'undefined') {
          //log out
          localStorage.removeItem('accessToken')
          return;
        }
        let temp = JSON.parse(localStorage.getItem("userRole"));
        setUserRole(temp);
      }
    }
    switch (asPath) {
      case asPath.match("/interview")?.input:
        currentPage = "Interview App";
        break;
      case "/login":
        currentPage = "Interview Login";
        break;
      case `/dashboard?access=${accessToken}`:
        currentPage = "Interview Dashboard";
        break;
    }
  }, []);

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
  function goLink(event, data) {
    if (event.target.name === "dashboard") {
      router.push("../dashboard");
    }
  }

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
        {userRole !== "ADMIN" ? null : (
          <div className={styles.dropdownmenu}>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={`Welcome, ${localStorage.firstName}`}
              menuVariant="light"
            >
              <NavDropdown.Item> View Profile </NavDropdown.Item>
              <NavDropdown.Item>
                <BtnLogin />
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
