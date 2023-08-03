import { createContext, useContext, ReactNode, useState } from "react";
import { Alert as AlertType, AlertStates } from "../types";
import Alert from "components/AlertWidget/components/Alert";

const AlertWidgetContext = createContext({} as AlertStates);

export const useAlertWidgetContext = () => {
  return useContext(AlertWidgetContext);
};

export function AlertWidgetContextProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState({});

  const states = { alert, setAlert };
  return (
    <AlertWidgetContext.Provider value={states as AlertStates}>
      {(alert as AlertType)?.show && <Alert />}
      {children}
    </AlertWidgetContext.Provider>
  );
}
