import { styled } from "styled-components/native";

export const StyledLi = styled.View`
  width: 100%;
  height: 108.65591430664062px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.totalWithe};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 0 5% 0 5%;
`;

export const StyledText = styled.Text`
  /* font-family: Montserrat; */
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;

  color: ${({ theme }) => theme.colors.grey25};
`;

export const StyledTitle = styled.Text`
  /* font-family: Montserrat; */
  font-size: 36px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.grey50};
`;

export const StyledBox = styled.View`
  width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 5px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
