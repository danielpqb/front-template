import { DefaultTheme } from "styled-components";
import { globalStyles as gs } from "../global-styles";

const theme: DefaultTheme = {
  title: "light",

  colors: {
    primary: gs.colors.black200,
    secondary: gs.colors.pink100,

    background: gs.colors.white100,
    text: gs.colors.black100,
  },
};

export default theme;
