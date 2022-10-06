//example Footer component
import { MDBFooter } from "mdb-react-ui-kit";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <div
        class="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright: Team A+
      </div>
    </MDBFooter>
  );
}

export default Footer;
