import { ReactNode } from "react";
import { StyledButton } from "./styles.button";

export default function Button({
  id,
  color,
  children,
}: {
  children: ReactNode;
  id?: string;
  color?: string;
}) {
  return (
    <StyledButton color={color} id={id}>
      <>{children}</>
    </StyledButton>
  );
}
