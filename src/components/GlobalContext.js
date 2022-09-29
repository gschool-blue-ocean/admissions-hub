import { createContext, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
    let dummyData = {name: "test234"}
  let sharedState = {
    dummyData
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
