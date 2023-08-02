import styled from "styled-components";
import React, { ReactNode } from "react";
import { removeUndefinedProperties } from "external/helpers/styles";

export default function Text({
  children,
  style,
  styleType,
}: {
  children: ReactNode;
  style?: React.CSSProperties;
  styleType?: string;
}) {
  style = removeUndefinedProperties(style);

  let typeStyle = {} as React.CSSProperties;
  switch (styleType) {
  case "button":
    typeStyle = {
      color: "#ffffff",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "20px",
    };
    break;
  }

  style = { ...typeStyle, ...style };

  return <Container style={style}>{children}</Container>;
}

const Container = styled.div`
  & {
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }
`;
