import styled from "styled-components/native";

export const Conteiner = styled.View`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;

  background-color: ${({ theme }) => theme.colors.brand};

  display: flex;
  flex-direction: column-reverse;
`;

export const StyledVectors = styled.View`
  display: flex;
  align-items: center;
`;

export const BoxContent = styled.View`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.Text`
  font-family: "RedHatDisplay_700Bold";
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;

  margin-bottom: 18px;
`;

export const StyledParagraph = styled.Text`
  font-family: "RedHatDisplay_700Bold";
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.30000001192092896px;
  text-align: center;

  margin-bottom: 12px;
`;

export const BoxButtons = styled.View`
  display: flex;
  width: 80%;
  max-width: 320px;

  gap: 12px;

  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;

  color: ${({ theme }) => theme.colors.withe};
`;

export const BoxContentButton = styled.View`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 10px;
`;

export const TextFont16 = styled.Text`
  font-family: "RedHatDisplay_700Bold";
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;

  margin-bottom: 20px;
`;

export const TextGrenn = styled.Text`
  color: ${({ theme }) => theme.colors.brand2};
`;

export const TextBold2 = styled.Text`
  font-family: "RedHatDisplay_700Bold";
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
`;

export const TextSpan = styled.Text`
  font-family: "RedHatDisplay_700Bold";
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;

  width: 80%;
  max-width: 320px;
  position: absolute;

  bottom: 80px;

  color: ${({ theme }) => theme.colors.grey};
`;
