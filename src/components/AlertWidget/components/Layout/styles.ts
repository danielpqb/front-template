import { StyleType } from "components/AlertWidget/types";
import styled from "styled-components";

export const Background = styled.div<{ alertStyle: StyleType }>`
  && {
    border: ${({ alertStyle }) => alertStyle.border};
    border-radius: 10px;

    position: absolute;
    background: ${({ alertStyle }) => alertStyle.backgroundColor};

    z-index: -3;
  }
`;

export const IconBackground = styled.div<{ alertStyle: StyleType }>`
  && {
    position: absolute;
    top: -${({ alertStyle }) => alertStyle.iconSize / 2 - 5}px;

    border-radius: 50%;
    width: ${({ alertStyle }) => alertStyle.iconSize}px;
    height: ${({ alertStyle }) => alertStyle.iconSize}px;
    background: ${({ alertStyle }) => alertStyle.backgroundColor};

    z-index: -2;

    border: ${({ alertStyle }) => alertStyle.border};
  }
`;

export const HideBorder = styled.div<{ alertStyle: StyleType }>`
  && {
    position: absolute;
    top: 50%;

    width: calc(100% + 30px);
    height: calc(50% + 30px);

    background: ${({ alertStyle }) => alertStyle.backgroundColor};

    z-index: -1;

    box-sizing: content-box;
  }
`;
