import Button from "external/components/source/Button/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ShowButtons() {
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        onClick={() => {
          navigate("/show-features");
        }}
      >
        Show Features
      </Button>
      <Button
        onClick={() => {
          navigate("/sign-in");
        }}
      >
        Login Page
      </Button>
      <Button
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        Register Page
      </Button>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    gap: 10px;
  }

  & > Button {
    width: 250px;
  }
`;
