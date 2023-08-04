import { useAlertWidgetContext } from "components/AlertWidget/contexts/AlertWidget";
import Button from "components/Button/Button";

export default function Buttons() {
  const { alert, setAlert } = useAlertWidgetContext();
  const { type, doThis } = alert;

  switch (type) {
    case "ok-cancel":
      return (
        <>
          <Button
            styleFlag="simple"
            onClick={() => {
              doThis();
              setAlert({});
            }}
          >
            Ok
          </Button>

          <Button
            styleFlag="outline"
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
