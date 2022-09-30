
import AdminLogin from "./AdminLogin";
// import { useAppContext } from "../../src/components/GlobalContext";
import LoginNavbar from "./LoginNavbar";
import {
  MDBFooter
} from "mdb-react-ui-kit";


export default function Login() {
  // const { dummyData } = useAppContext();
  // console.log(dummyData);
  return (
    <>
      <div>
        <LoginNavbar />
      </div>
      <div
        className="position-absolute container"
        style={{ top: "34.5%", left: "33%", width: 600 }}
      >
        <AdminLogin />
      </div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <div
          class="fixed-bottom text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright: Team A+
        </div>
      </MDBFooter>
    </>
  );
}
