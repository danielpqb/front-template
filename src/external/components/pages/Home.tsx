import styled from "styled-components";
import ShowButtons from "../TemplateFeatures/ShowButtons";

export default function Home() {
  return (
    <Container>
      <ShowButtons />
    </Container>
  );
}

const Container = styled.div`
  & {
  }
`;
