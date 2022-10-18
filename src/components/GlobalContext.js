import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [info, setInfo] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [user, setUser] = useState();
  const [userRole, setUserRole] = useState("");
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
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
