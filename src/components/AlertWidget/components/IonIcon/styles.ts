import styled from "styled-components";

export const Container = styled.div<{ cssStyle: React.CSSProperties }>`
  ${({ cssStyle }) => cssStyle as string}
`;

export const Icon = styled.div<{ cssStyle: React.CSSProperties }>`
  * {
    font-size: 20px;
    color: rgb(125, 125, 125);

    ${({ cssStyle }) => cssStyle as string}
  }
`;
