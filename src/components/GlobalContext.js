import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [info, setInfo] = useState([]);
    let dummyData = {name: "test234"}
  let sharedState = {
    dummyData,
    info,
    setInfo,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
