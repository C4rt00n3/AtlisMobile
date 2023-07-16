import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Login";

const { Screen, Navigator } = createStackNavigator();

export default function MyStack() {
  return (
    <Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
}
