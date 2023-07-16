import { BoxInput, StyledInput } from "./styles.input.home";
import Loupe from "../../../assets/loupe.svg";
import { useColorScheme } from "react-native";
import themes from "../../../styles/theme";

export default function InputHome() {
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme!] || themes.light;

  return (
    <BoxInput>
      <StyledInput
        placeholderTextColor={theme.colors.withe}
        placeholder="Digite o que você precisa"
      />
      <Loupe />
    </BoxInput>
  );
}
