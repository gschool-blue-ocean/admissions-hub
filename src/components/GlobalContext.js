import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [info, setInfo] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [user, setUser] = useState();
  const [interviewReport, setInterviewReport] = useState([-1]);
  const [userRole, setUserRole] = useState("");
  const [students, setStudents] = useState([]);
  const [interview, setInterview] = useState();
  let displayRole = "";
  if (userRole === "ADMIN") {
    displayRole = "";
  } else {
    displayRole = "hidden";
  }
  let sharedState = {
    info,
    setInfo,
    showWarning,
    setShowWarning,
    user,
    setUser,
    setUserRole,
    userRole,
    displayRole,
    interviewReport,
    setInterviewReport,
    students,
    setStudents,
    interview,
    setInterview
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
