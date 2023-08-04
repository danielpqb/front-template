import { createContext, useContext, ReactNode, useState } from "react";
import { AppStates } from "external/types/app-types";

const AppContext = createContext({} as AppStates);

export const useAppContext = () => {
  return useContext(AppContext);
};

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState({});
  const [counter, setCounter] = useState({});

  const states = { alert, setAlert, counter, setCounter };

  return (
    <AppContext.Provider value={states as AppStates}>
      {children}
    </AppContext.Provider>
  );
}
