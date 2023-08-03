import { ReactNode } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import ProtectedRoute from "./external/components/common/ProtectedRoute/ProtectedRoute";

import { useAppContext } from "./external/contexts/AppContext";
import Home from "./external/components/pages/Home";
import ShowFeatures from "external/components/TemplateFeatures/ShowFeatures";
import Alert from "external/components/common/Alert/Alert";
import Counter from "external/components/source/Counter/Counter";
import SignIn from "external/components/pages/SignIn";
import SignUp from "external/components/pages/SignUp";
import useToken from "external/hooks/api/useToken";

export default function App() {
  const { alert, counter } = useAppContext();
  const token = useToken();

  return (
    <>
      {alert?.show && <Alert />}
      {counter?.show && <Counter />}

      <Background>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}
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
    </>
  );
}

function Background({ children }: { children: ReactNode }) {
  return <Layer1>{children}</Layer1>;
}

const Layer1 = styled.div`
  & {
    width: 100vw;

    background-color: var(--background-color);
  }
`;
