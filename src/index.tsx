import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "global/styles/reset-css";
import { AnimationContextProvider } from "react-animate-with-css";
import { ReactQueryContextProvider } from "global/contexts/ReactQuery/ReactQuery";
import { StyledComponentsThemeContextProvider } from "global/contexts/StyledComponentsTheme/StyledComponentsTheme";
import { AlertWidgetContextProvider } from "components/AlertWidget/contexts/AlertWidget";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />

    <AnimationContextProvider>
      <StyledComponentsThemeContextProvider>
        <ReactQueryContextProvider>
          <AlertWidgetContextProvider>
            <App />
          </AlertWidgetContextProvider>
        </ReactQueryContextProvider>
      </StyledComponentsThemeContextProvider>
    </AnimationContextProvider>
  </React.StrictMode>
);
