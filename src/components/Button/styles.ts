import { ThreeDots } from "react-loader-spinner";
import styled, { css } from "styled-components";

export const Container = styled.button<{ loading: boolean; styleFlag?: string }>`
  & {
    position: relative;
    overflow: hidden;

    cursor: pointer;

    width: 250px;
    height: 45px;

    border: 4px solid white;
    border-radius: 5px;

    box-sizing: border-box;
  }

  &:hover {
    transform: scale(1.02);
  }

  ${({ loading }) =>
    !loading &&
    css`
      &:active {
        transform: scale(0.98);
      }
    `}

  ${({ styleFlag, theme }) => {
    switch (styleFlag) {
      case "simple":
        return css`
          & {
            background-color: ${theme.colors.background};
            border-color: ${theme.colors.text};
          }
        `;
    }
  }}
`;

export const Text = styled.div<{ styleFlag?: string }>`
  & {
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
  }

  ${({ styleFlag, theme }) => {
    switch (styleFlag) {
      case "simple":
        return css`
          & {
            color: ${theme.colors.text};
          }
        `;
    }
  }}
`;

export const LoadingDots = styled(ThreeDots).attrs((props) => {
  if (props.theme.title === "dark") props.color = "white";
  if (props.theme.title === "light") props.color = "black";
  return props;
})``;
