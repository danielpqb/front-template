import Layout from "../Layout/Layout";
import Blur from "../Blur/Blur";
import IonIcon from "../IonIcon/IonIcon";
import Message from "../Message/Message";
import Buttons from "../Buttons/Buttons";
import { useAlertWidgetContext } from "components/AlertWidget/contexts/AlertWidget";
import { Container } from "./styles";
import { StyleType } from "components/AlertWidget/types";

export default function Alert() {
  const { alert } = useAlertWidgetContext();
  const { style, icon } = alert;

  return (
    <>
      <Blur />

      <Container alertStyle={style as StyleType}>
        <Layout alertStyle={style as StyleType} />
        <IonIcon
          name={icon}
          style={{
            fontSize: `${style.iconSize}px`,
            color: style.mainColor,
            filter: "brightness(1.03)",
          }}
          divStyle={{
            position: "absolute",
            top: `-${(style.iconSize as any) / 2 - 5}px`,
            width: "fit-content",
            height: "fit-content",
          }}
        />

        <Message />

        <Buttons />
      </Container>
    </>
  );
}
