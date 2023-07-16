import { styled } from "styled-components/native";

export const Conteiner = styled.View`
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column-reverse;
`;

export const StyledNavbar = styled.View`
  width: 100%;
  height: 69px;

  max-width: 320px;
  padding: 0 5% 0 5%;

  border-radius: 34.5px;
  background-color: ${({ theme }) => theme.colors.totalWithe};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  width: 58px;
  height: 58px;

  border-radius: 34.5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
