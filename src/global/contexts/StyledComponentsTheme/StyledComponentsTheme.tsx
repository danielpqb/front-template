import { createContext, useContext, ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";

import light from "global/styles/themes/light";
import dark from "global/styles/themes/dark";
import { ThemeStates } from "./types";

const StyledComponentsThemeContext = createContext({} as ThemeStates);

export const useStyledComponentsThemeContext = () => {
  return useContext(StyledComponentsThemeContext);
};

export function StyledComponentsThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const storageValue = localStorage.getItem("theme");
  const initialTheme = storageValue === "light" ? light : dark;

  const [theme, setTheme] = useState(initialTheme);

  function toggleTheme() {
    setTheme((old) => {
      const _new = old.title === "light" ? dark : light;
      localStorage.setItem("theme", _new.title);
      return _new;
    });
  }

  const states = { theme, toggleTheme };

  return (
    <StyledComponentsThemeContext.Provider value={states as ThemeStates}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsThemeContext.Provider>
  );
}
