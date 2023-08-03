import Button from "components/Button/Button";
import { useStyledComponentsThemeContext } from "global/contexts/StyledComponentsTheme/StyledComponentsTheme";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ShowButtons() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useStyledComponentsThemeContext();

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
      <Button
        onClick={() => {
          toggleTheme();
        }}
      >
        Theme ({theme.title})
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
