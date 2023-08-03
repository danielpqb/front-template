import styled from "styled-components";
import { MessageStyleType } from "./types";
import { useAlertWidgetContext } from "components/AlertWidget/contexts/AlertWidget";

export default function Message() {
  const { alert } = useAlertWidgetContext();

  const { message = "Alert!", messageStyle } = alert;

  return <Container messageStyle={messageStyle}>{message}</Container>;
}

const Container = styled.div<{ messageStyle: Partial<MessageStyleType> }>`
  && {
    flex-wrap: wrap;
    overflow-y: auto;

    color: black;
    font-size: 22px;
    font-weight: 500;
    line-height: 25px;

    white-space: pre-line;
    word-break: break-word;
    text-align: center;
    vertical-align: middle;

    margin-top: 35px;

    min-height: 15vh;
    height: fit-content;

    ${({ messageStyle }) => messageStyle}
  }
`;
