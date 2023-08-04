import * as ionicons from "react-icons/io5";
import { Container, Icon } from "./styles";

export default function IonIcon({
  name,
  style,
  divStyle,
}: {
  name: string;
  style?: React.CSSProperties;
  divStyle?: React.CSSProperties;
}) {
  const convertName = () => {
    const array = name.split("-");
    const newName = array
      .map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
      })
      .join("");

    return "Io" + newName;
  };

  const DynamicIcon = ionicons[convertName() as keyof typeof ionicons];

  return (
    <Container cssStyle={divStyle as React.CSSProperties}>
      <Icon cssStyle={style as React.CSSProperties}>
        <DynamicIcon />
      </Icon>
    </Container>
  );
}
