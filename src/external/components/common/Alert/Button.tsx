import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import React, { ReactNode } from "react";
import { removeUndefinedProperties } from "external/helpers/styles";

export default function Button({
  children,
  disabled,
  style,
  styleType,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  styleType?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  style = removeUndefinedProperties(style);

  let typeStyle = {} as React.CSSProperties;
  switch (styleType) {
  case "1":
    typeStyle = {};
    break;
  }
  style = { ...typeStyle, ...style };

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

const Container = styled.button.attrs((style) => style)`
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

const Background = styled.div<{ backgroundColor: string; filter: string; border: string }>`
  & {
    position: absolute;
    z-index: -1;
    background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "#505050")};
    filter: ${({ filter }) => (filter ? filter : "")};
    border: ${({ border }) => (border ? border : "")};
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
