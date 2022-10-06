import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [info, setInfo] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  let sharedState = {
    info,
    setInfo,
    showWarning,
    setShowWarning,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
