import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import {Ionicons} from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';

import {Navigation} from './src/infrastructure/navigation/index'

  export default function App() {
    return (
      <> 
      <StatusBar style="auto" />
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation/>
        </RestaurantsContextProvider>
      </LocationContextProvider>
      </>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
