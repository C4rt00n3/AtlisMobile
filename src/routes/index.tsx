import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./stack.route";
import Theme from "../template/theme";

export default function Routes() {
  return (
    <NavigationContainer>
      <Theme>
        <MyStack />
      </Theme>
    </NavigationContainer>
  );
}
