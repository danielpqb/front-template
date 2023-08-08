import { MessageStyleType } from "components/AlertWidget/types";
import styled from "styled-components";

export const Container = styled.div<{
  messageStyle: Partial<MessageStyleType>;
}>`
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
