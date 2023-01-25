import { useEffect } from "react";
import router from "next/router";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import InterviewDash from "../../src/components/InterviewDash";

export default function index() {
  //if local storage does not have accessToken, redirect to login page
  useEffect(() => {
    let accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/login");
    } else {
      router.push(`/dashboard`);
    }
  }, []);

  return (
    <div style={{backgroundColor: "#0d0f4ae3"}}>
      <Header />
      <InterviewDash />
      <Footer />
    </div>
  );
}
