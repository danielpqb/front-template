export type AlertStates = {
  alert: Alert;
  setAlert: React.Dispatch<React.SetStateAction<Partial<Alert>>>;
};

export type Alert = {
  show: boolean;
  styleFlag: StyleFlag;
  type: "ok" | "ok-cancel";
  style: Partial<StyleType>;
  messageStyle: Partial<MessageStyleType>;
  icon: string;
  message: string;
  doThis: () => void;
};

export type StyleFlag = "red" | "green" | "blue" | "orange" | "yellow";

export type StyleType = {
  mainColor: string;
  iconSize: number;
  backgroundColor: string;
  border: string;
};

export type MessageStyleType = {
  color: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
};
