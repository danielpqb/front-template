import { ReactNode } from "react";
import styled from "styled-components";

export default function FeatureBox({ children, text }: { children: ReactNode; text: string }) {
  return (
    <Container>
      <div>{text}</div>
      {children}
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    border: 5px solid white;
    border-radius: 5px;

    width: 90%;
    height: fit-content;

    padding: 10px;

    font-size: 20px;
  }
`;
