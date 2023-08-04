import { DefaultTheme } from "styled-components";
import { globalStyles as gs } from "../global-styles";

const theme: DefaultTheme = {
  title: "dark",

  colors: {
    primary: gs.colors.pink100,
    secondary: gs.colors.black200,

    background: gs.colors.black100,
    text: gs.colors.white100,
  },
};

export default theme;
