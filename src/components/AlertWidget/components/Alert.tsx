import styled from "styled-components";

import Layout from "./Layout";
import * as AlertTypes from "./types";
import Blur from "./Blur";
import IonIcon from "./IonIcon";
import { defineProps } from "./functions";
import Message from "./Message";
import { useEffect } from "react";
import Buttons from "./Buttons";
import { useAlertWidgetContext } from "components/AlertWidget/contexts/AlertWidget";

export default function Alert() {
  const { alert, setAlert } = useAlertWidgetContext();

  useEffect(() => {
    defineProps(alert, setAlert);
  }, []);

  if (!alert?.style || !alert?.icon) return;
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

const Container = styled.div<{ alertStyle: AlertTypes.StyleType }>`
  & {
    position: fixed;
    margin: auto;
    top: ${({ alertStyle }) => alertStyle.iconSize / 2}px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 21;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 90vw;
    max-width: 450px;
    height: fit-content;

    max-height: calc(var(--doc-heigth) - 70px);
    padding: 15px;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  * {
    font-family: "Fira Sans";
  }
`;
