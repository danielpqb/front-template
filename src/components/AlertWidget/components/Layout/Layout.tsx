import { StyleType } from "../types";
import { Background, HideBorder, IconBackground } from "./styles";

export default function Layout({ alertStyle }: { alertStyle: StyleType }) {
  return (
    <>
      <Background alertStyle={alertStyle} />

      <IconBackground alertStyle={alertStyle}>
        <HideBorder alertStyle={alertStyle} />
      </IconBackground>
    </>
  );
}
