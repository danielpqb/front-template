import { ReactNode } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled, { css } from "styled-components";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import Home from "./pages/Home/Home";
import ShowFeatures from "external/components/TemplateFeatures/ShowFeatures";
import SignIn from "external/components/pages/SignIn";
import SignUp from "external/components/pages/SignUp";
import useToken from "external/hooks/api/useToken";
import ShowButtons from "external/components/TemplateFeatures/ShowButtons";

export default function App() {
  const token = useToken();

  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/show-buttons"
            element={<ShowButtons />}
          />
          <Route
            path="/show-features"
            element={<ShowFeatures />}
          />
          <Route
            path="/sign-in"
            element={<SignIn />}
          />
          <Route
            path="/sign-up"
            element={<SignUp />}
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute
                token={token}
                noTokenPath={"/"}
                element={<></>}
              />
            }
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

function Background({ children }: { children: ReactNode }) {
  return <Layer1>{children}</Layer1>;
}

const Layer1 = styled.div`
  & {
    width: 100vw;

    background-color: var(--background-color);

    ${({ theme }) => {
      return css`
        & {
          background-color: ${theme.colors.background};
        }
      `;
    }}
  }
`;
