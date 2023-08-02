import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import React, { ReactNode } from "react";
import Text from "../Text/Text";
import { removeUndefinedProperties } from "external/helpers/styles";

export default function Button({
  children,
  disabled = false,
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
          styleType="button"
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
    height: fit-content;

    border: 4px solid rgba(255, 255, 255, 1);
    border-radius: 5px;

    padding: 5px;

    box-sizing: border-box;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;
