import { useAlertWidgetContext } from "components/AlertWidget/contexts/AlertWidget";
import { Container } from "./styles";

export default function Message() {
  const { alert } = useAlertWidgetContext();

  const { message = "Alert!", messageStyle } = alert;

  return <Container messageStyle={messageStyle}>{message}</Container>;
}
