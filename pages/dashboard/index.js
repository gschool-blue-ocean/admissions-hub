import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import InterviewDash from "../../src/components/InterviewDash";
import Problems from "../../src/components/Problems";

export default function index() {
  return (
    <div>
      <Header />
      <Problems />
      <InterviewDash />
      <Footer />
    </div>
  );
}
