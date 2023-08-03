import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import React, { ReactNode } from "react";
import { removeUndefinedProperties } from "external/helpers/styles";

export default function Button({
  children,
  disabled,
  style,
  styleFlag,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  styleFlag?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  style = removeUndefinedProperties(style);

  let flagStyle = {} as React.CSSProperties;
  switch (styleFlag) {
    case "1":
      flagStyle = {};
      break;
  }
  style = { ...flagStyle, ...style };

  return (
    <Container
      onClick={disabled ? () => {} : onClick}
      style={{
        width: style?.width,
        height: style?.height,
        maxWidth: style?.maxWidth,
        maxHeight: style?.maxHeight,
        position: style?.position,
        boxSizing: style?.boxSizing,
        margin: style?.margin,
        padding: style?.padding,
        background: style?.background,
        backgroundColor: style?.backgroundColor,
        filter: style?.filter,
        border: style?.border,
        boxShadow: style?.boxShadow,
        marginTop: style?.marginTop,
        marginBottom: style?.marginBottom,
        marginLeft: style?.marginLeft,
        marginRight: style?.marginRight,
        paddingTop: style?.paddingTop,
        paddingBottom: style?.paddingBottom,
        paddingLeft: style?.paddingLeft,
        paddingRight: style?.paddingRight,
      }}
    >
      {disabled ? (
        <ThreeDots
          height="13"
          width="51"
          color={style?.color ? style?.color : "#ffffff"}
          ariaLabel="three-dots-loading"
        />
      ) : (
        <Text
          style={{
            color: style?.color,
            font: style?.font,
            fontStyle: style?.fontStyle,
            fontWeight: style?.fontWeight,
            fontSize: style?.fontSize,
            lineHeight: style?.lineHeight,
          }}
        >
          {children}
        </Text>
      )}
    </Container>
  );
}

const Container = styled.button`
  & {
    position: relative;
    overflow: hidden;

    cursor: pointer;

    width: 100%;
    height: 45px;

    border: none;
    border-radius: 5px;

    box-sizing: content-box;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Text = styled.div`
  & {
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
  }
`;
