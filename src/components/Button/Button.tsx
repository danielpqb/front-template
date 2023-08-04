import React, { ReactNode } from "react";
import { Container, LoadingDots, Text } from "./styles";
import { StyleFlag } from "./types";

export default function Button({
  children,
  loading = false,
  onClick,
  styleFlag = "simple",
}: {
  children: ReactNode;
  loading?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  styleFlag?: StyleFlag;
}) {
  return (
    <Container
      $loading={loading}
      onClick={loading ? () => {} : onClick}
      styleFlag={styleFlag}
    >
      {loading ? (
        <LoadingDots
          height="13"
          width="51"
          ariaLabel="three-dots-loading"
          styleFlag={styleFlag}
        />
      ) : (
        <Text styleFlag={styleFlag}>{children}</Text>
      )}
    </Container>
  );
}
