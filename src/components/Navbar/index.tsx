import { Conteiner, StyledNavbar, TouchableOpacity } from "./styles.navbar";
import { useColorScheme } from "react-native";
import themes from "../../../styles/theme";
import React from "react";
import { HomeSvg, InjectorSvg, TestSvg, UserSvg } from "../Icons";

export default function Navbar() {
  const deviceTheme = useColorScheme();
  const [buttonIndex, setButtonIndex] = React.useState(0);

  const theme = themes[deviceTheme!] || themes.light;

  const style = {
    backgroundColor: theme.colors.brand,
    shadowColor: "black",
    shadowOpacity: 0.9,
    elevation: 10,
  };

  return (
    <Conteiner>
      <StyledNavbar>
        <TouchableOpacity
          onPress={() => setButtonIndex(0)}
          style={buttonIndex !== 0 ? {} : style}
        >
          <HomeSvg on={buttonIndex !== 0 ? true : false} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setButtonIndex(1)}
          style={buttonIndex !== 1 ? {} : style}
        >
          <TestSvg on={buttonIndex !== 1 ? true : false} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setButtonIndex(2)}
          style={buttonIndex !== 2 ? {} : style}
        >
          <InjectorSvg on={buttonIndex !== 2 ? true : false} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setButtonIndex(3)}
          style={buttonIndex !== 3 ? {} : style}
        >
          <UserSvg on={buttonIndex !== 3 ? true : false} />
        </TouchableOpacity>
      </StyledNavbar>
    </Conteiner>
  );
}
