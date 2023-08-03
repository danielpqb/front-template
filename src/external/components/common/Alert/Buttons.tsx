import { useAppContext } from "external/contexts/AppContext";
import Button from "./Button";

export default function Buttons() {
  const { alert, setAlert } = useAppContext();
  const { type, doThis, style } = alert;

  switch (type) {
  case "ok-cancel":
    return (
      <>
        <Button
          style={{
            backgroundColor: style.mainColor,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "10px",
          }}
          onClick={() => {
            doThis();
            setAlert({});
          }}
        >
            Ok
        </Button>

        <Button
          style={{
            backgroundColor: style.mainColor,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "10px",
            filter: "grayscale(100%) invert(15%)",
          }}
          onClick={() => {
            setAlert({});
          }}
        >
            Cancel
        </Button>
      </>
    );
  default:
    return (
      <>
        <Button
          style={{
            backgroundColor: style.mainColor,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "10px",
          }}
          onClick={() => {
            doThis();
            setAlert({});
          }}
        >
            Ok
        </Button>
      </>
    );
  }
}
