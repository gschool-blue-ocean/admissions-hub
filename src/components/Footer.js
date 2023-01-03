//example Footer component
import { MDBFooter } from "mdb-react-ui-kit";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <div
        class="text-center p-4"
        style={{ backgroundColor: "#f0f0f0", position: "relative",  zIndex: 4 }}
      >
        © 2022 Copyright: Team Exterminators
      </div>
    </MDBFooter>
  );
}

export default Footer;
