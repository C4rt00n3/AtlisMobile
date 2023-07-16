import { styled } from "styled-components/native";

export const Conteiner = styled.ScrollView`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.withe};
`;

export const BoxContent = styled.View`
  width: 90%;
`;

export const BoxIcons = styled.View`
  width: 100%;
  height: 55px;

  display: flex;
  flex-direction: row-reverse;

  margin: 30px 0 33px 0;

  gap: 7px;
`;

export const TextSpan = styled.Text`
  width: 27px;
  height: 11px;

  /* font-family: Montserrat; */
  font-size: 9px;
  font-weight: 500;
  line-height: 11px;
  letter-spacing: 0px;
  text-align: left;

  color: ${({ theme }) => theme.colors.textBlue};
`;

export const BoxSvgSuport = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BoxImageUser = styled.View`
  width: 55px;
  height: 55px;

  border-radius: 27px;

  overflow: hidden;
`;

export const ImageBackground = styled.ImageBackground`
  width: 55px;
  height: 55px;
`;

export const Space = styled.View`
  width: 100%;
  height: 25px;
`;

export const BoxList = styled.View`
  min-height: 280px;

  width: 100%;
`;

export const BoxContentSpace = styled.View<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height + "px"};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
