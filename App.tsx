import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import { Component, ReactNode } from "react";
import Routes from "./src/routes";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";
import {
  RedHatDisplay_300Light,
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_600SemiBold,
  RedHatDisplay_700Bold,
  RedHatDisplay_800ExtraBold,
  RedHatDisplay_900Black,
} from "@expo-google-fonts/red-hat-display";

import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black_Italic,
    RedHatDisplay_300Light,
    RedHatDisplay_400Regular,
    RedHatDisplay_500Medium,
    RedHatDisplay_600SemiBold,
    RedHatDisplay_700Bold,
    RedHatDisplay_800ExtraBold,
    RedHatDisplay_900Black,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}
