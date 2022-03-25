import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import {Ionicons} from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';

function Restaurants() {
  return (
    <>
      <RestaurantScreen />
    </>
  );
}

  function Map() {
    return (
      <SafeAreaView>
        <Text>Map Screen</Text>
      </SafeAreaView>
    );
  }

  function Settings() {
    return (
      <SafeAreaView>
        <Text>Settings Screen</Text>
      </SafeAreaView>
    );
  }

  const Tab = createBottomTabNavigator();

  export default function App() {
    return (
      <> 
      <StatusBar style="auto" />
      <LocationContextProvider>
      <RestaurantsContextProvider>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Restaurants') {
              iconName = focused
                ? 'restaurant'
                : 'restaurant-outline';
            } else if (route.name === 'Map') {
              iconName = focused 
              ? 'ios-map' 
              : 'ios-map-outline';
            } else if (route.name === 'Settings') {
              iconName = focused 
              ? 'ios-settings-sharp' 
              : 'ios-settings-outline';
            }  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name="Restaurants" component={Restaurants} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
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
