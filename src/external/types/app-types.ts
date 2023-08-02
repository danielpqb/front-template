import * as AlertTypes from "../../external/components/common/Alert/types";
import * as CouterTypes from "../../external/components/source/Counter/types";

export type AppStates = {
  alert: AlertTypes.Alert;
  setAlert: React.Dispatch<React.SetStateAction<Partial<AlertTypes.Alert>>>;
  counter: CouterTypes.Counter;
  setCounter: React.Dispatch<React.SetStateAction<Partial<CouterTypes.Counter>>>;
};
