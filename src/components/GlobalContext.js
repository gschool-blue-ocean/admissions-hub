import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [info, setInfo] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [user, setUser] = useState();
  let sharedState = {
    info,
    setInfo,
    showWarning,
    setShowWarning,
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
