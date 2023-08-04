import { globalStyles } from "global/styles/global-styles";
import { ThreeDots } from "react-loader-spinner";
import styled, { css } from "styled-components";

export const Container = styled.button<{
  $loading: boolean;
  styleFlag?: string;
}>`
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

  ${({ $loading }) => {
    if (!$loading)
      return css`
        &:active {
          transform: scale(0.98);
        }
      `;
  }}

  ${({ styleFlag, theme }) => {
    switch (styleFlag) {
      case "simple":
        return css`
          & {
            background-color: ${theme.title === "light"
              ? globalStyles.colors.black100
              : globalStyles.colors.white100};
            border: none;
          }
        `;
      case "outline":
        return css`
          & {
            background-color: ${theme.title === "light"
              ? globalStyles.colors.white100
              : globalStyles.colors.black100};
            border-color: ${theme.title === "light"
              ? globalStyles.colors.black100
              : globalStyles.colors.white100};
          }
        `;
      case "simple-rounded":
        return css`
          & {
            background-color: ${theme.title === "light"
              ? globalStyles.colors.black100
              : globalStyles.colors.white100};
            border: none;
            border-radius: 30px;
          }
        `;
      case "outline-rounded":
        return css`
          & {
            background-color: ${theme.title === "light"
              ? globalStyles.colors.white100
              : globalStyles.colors.black100};
            border-color: ${theme.title === "light"
              ? globalStyles.colors.black100
              : globalStyles.colors.white100};
            border-radius: 30px;
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
      case "simple-rounded":
        return css`
          & {
            color: ${theme.title === "light"
              ? globalStyles.colors.white100
              : globalStyles.colors.black100};
          }
        `;
      case "outline":
      case "outline-rounded":
        return css`
          & {
            color: ${theme.title === "light"
              ? globalStyles.colors.black100
              : globalStyles.colors.white100};
          }
        `;
    }
  }}
`;

export const LoadingDots = styled(ThreeDots).attrs<{ styleFlag?: string }>(
  (props) => {
    switch (props.styleFlag) {
      case "simple":
      case "simple-rounded":
        props.color =
          props.theme.title === "light"
            ? globalStyles.colors.white100
            : globalStyles.colors.black100;
        break;
      case "outline":
      case "outline-rounded":
        props.color =
          props.theme.title === "light"
            ? globalStyles.colors.black100
            : globalStyles.colors.white100;
        break;
    }
    return props;
  }
)<{ styleFlag?: string }>``;
