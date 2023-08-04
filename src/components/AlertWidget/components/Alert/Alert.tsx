import Layout from "../Layout/Layout";
import * as AlertTypes from "../types";
import Blur from "../Blur/Blur";
import IonIcon from "../IonIcon/IonIcon";
import Message from "../Message/Message";
import Buttons from "../Buttons/Buttons";
import { useAlertWidgetContext } from "components/AlertWidget/contexts/AlertWidget";
import { Container } from "./styles";

export default function Alert() {
  const { alert } = useAlertWidgetContext();
  const { style, icon } = alert;

  return (
    <>
      <Blur />

      <Container alertStyle={style as AlertTypes.StyleType}>
        <Layout alertStyle={style as AlertTypes.StyleType} />
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
