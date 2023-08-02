import UserContextProvider from "external/contexts/UserContext";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./external/contexts/AppContext";
import { GlobalStyle } from "global-styles";
import { AnimationContextProvider } from "react-animate-with-css";
import { QueryContextProvider } from "external/contexts/QueryContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />

    <AppContextProvider>
      <UserContextProvider>
        <AnimationContextProvider>
          <QueryContextProvider>
            <App />
          </QueryContextProvider>
        </AnimationContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
