import { ThemeProvider } from "styled-components";
import { useColorScheme } from "react-native";
import themes from "../../styles/theme";

const Theme = ({ children }: { children: React.ReactNode }) => {
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme!] || themes.light;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
