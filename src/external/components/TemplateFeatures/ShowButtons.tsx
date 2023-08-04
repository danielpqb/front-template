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
        styleFlag="simple"
        onClick={() => {
          navigate("/show-features");
        }}
      >
        Show Features
      </Button>
      <Button
        styleFlag="outline"
        onClick={() => {
          navigate("/sign-in");
        }}
      >
        Login Page
      </Button>
      <Button
        styleFlag="simple-rounded"
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        Register Page
      </Button>
      <Button
        styleFlag="outline-rounded"
        onClick={() => {
          toggleTheme();
        }}
      >
        Theme ({theme.title})
      </Button>
      <Button
        loading={true}
        styleFlag="simple"
        onClick={() => {
          navigate("/show-features");
        }}
      >
        Show Features
      </Button>
      <Button
        loading={true}
        styleFlag="outline"
        onClick={() => {
          navigate("/sign-in");
        }}
      >
        Login Page
      </Button>
      <Button
        loading={true}
        styleFlag="simple-rounded"
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        Register Page
      </Button>
      <Button
        loading={true}
        styleFlag="outline-rounded"
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
`;
