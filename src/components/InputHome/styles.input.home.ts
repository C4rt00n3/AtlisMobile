import { styled } from "styled-components/native";

export const BoxInput = styled.View`
  width: 100%;
  height: 64px;

  padding: 0 5% 0 5%;

  background-color: ${({ theme }) => theme.colors.brand};

  border-radius: 20px;

  margin-bottom: 26px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const StyledInput = styled.TextInput`
  width: 166px;

  /* font-family: Montserrat; */
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;

  color: ${({ theme }) => theme.colors.withe};
`;
