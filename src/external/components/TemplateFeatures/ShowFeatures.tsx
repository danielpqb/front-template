import { useAnimate, Animation } from "react-animate-with-css";
import styled from "styled-components";

import FeatureBox from "./FeatureBox";
import { useAlertWidgetContext } from "components/AlertWidget/contexts/AlertWidget";

export default function ShowFeatures() {
  const { setAlert } = useAlertWidgetContext();

  const { animate } = useAnimate();

  const style = { width: "fit-content", height: "fit-content", padding: "10px 0px" };

  return (
    <Container>
      <FeatureBox text="Click the icon to execute an animation that remove the component after animating.">
        <Animation
          id={"icon"}
          animateIn={{ name: "backInLeft" }}
          style={style}
        >
          <img
            src="/logo.svg"
            alt=""
            onClick={() => {
              animate({
                id: "icon",
                name: "backInLeft",
                duration: 1000,
                repeat: 1,
                removeAfter: true,
                direction: "reverse",
                timing: "linear",
              });
            }}
          />
        </Animation>
      </FeatureBox>

      <FeatureBox text="Click the icon to execute an animation.">
        <Animation
          id={"icon2"}
          animateIn={{ name: "backInRight" }}
          style={style}
        >
          <img
            src="/logo.svg"
            alt=""
            onClick={() => {
              animate({ id: "icon2", name: "tada", duration: 1000 });
            }}
          />
        </Animation>
      </FeatureBox>

      <FeatureBox text="Click the button to show an alert.">
        <Animation
          id={"alertButton"}
          animateIn={{ name: "backInUp", duration: 1000 }}
          style={style}
        >
          <ShowAlert
            onClick={() => {
              setAlert({
                show: true,
                type: "ok-cancel",
              });
            }}
          >
            Show Alert
          </ShowAlert>
        </Animation>
      </FeatureBox>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    gap: 20px;
  }

  img {
    width: 100px;
  }
  img:hover {
    cursor: pointer;
  }
`;

const ShowAlert = styled.div`
  & {
    border: 5px solid white;
    border-radius: 5px;

    width: fit-content;
    height: fit-content;

    padding: 10px;

    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;
