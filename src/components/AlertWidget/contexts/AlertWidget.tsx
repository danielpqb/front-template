import { createContext, useContext, ReactNode, useState } from "react";
import { Alert as AlertType, AlertStates } from "../types";
import Alert from "components/AlertWidget/components/Alert/Alert";
import { defineProps } from "../components/functions";

const AlertWidgetContext = createContext({} as AlertStates);

export const useAlertWidgetContext = () => {
  return useContext(AlertWidgetContext);
};

export function AlertWidgetContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [alert, setAlert] = useState({});
  const _alert = defineProps(alert as AlertType);

  const states = { alert: _alert, setAlert };
  return (
    <AlertWidgetContext.Provider value={states as AlertStates}>
      {(alert as AlertType)?.show && <Alert />}
      {children}
    </AlertWidgetContext.Provider>
  );
}
