import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { StatusBar, StyleSheet } from "react-native";

import {useFonts as  UseOswald, Oswald_400Regular} from '@expo-google-fonts/oswald'
import {useFonts as UseLato, Lato_400Regular} from '@expo-google-fonts/lato'
import { useFonts } from "expo-font";


export default function App() {

  const [OswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });

  const [LatoLoaded] = UseLato({
    Lato_400Regular,
  });

  return (
    <>
      <StatusBar style="auto" />
      <RestaurantScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
