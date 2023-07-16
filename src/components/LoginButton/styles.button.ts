import { styled } from "styled-components/native";

export const StyledButton = styled.TouchableOpacity<{ color?: string }>`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 44px;
  border-radius: 10px;
  border-image-source: linear-gradient(
    135deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 100%
  );

  background-color: ${({ color }) => color};

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;
