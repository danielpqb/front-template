import React, { ReactNode } from "react";
import { Container, LoadingDots, Text } from "./styles";

export default function Button({
  children,
  loading = false,
  onClick,
  styleFlag = "simple",
}: {
  children: ReactNode;
  loading?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  styleFlag?: string;
  theme?: string;
}) {
  return (
    <Container
      loading={!!loading}
      onClick={loading ? () => {} : onClick}
      styleFlag={styleFlag}
    >
      {loading ? (
        <LoadingDots
          height="13"
          width="51"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <Text styleFlag={styleFlag}>{children}</Text>
      )}
    </Container>
  );
}
