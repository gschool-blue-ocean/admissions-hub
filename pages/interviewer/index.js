import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Body from "../../src/components/Body";
import InterviewDash from "../../src/components/InterviewDash";
import { BsTextCenter } from "react-icons/bs";

export default function index() {
  return (
    <div>
      <Header />
      <InterviewDash />
      <Footer />
    </div>
  );
}
