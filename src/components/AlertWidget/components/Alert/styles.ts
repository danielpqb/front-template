import { StyleType } from "components/AlertWidget/types";
import styled from "styled-components";

export const Container = styled.div<{ alertStyle: StyleType }>`
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
