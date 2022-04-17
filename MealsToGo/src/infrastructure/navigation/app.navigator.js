import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import {Ionicons} from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";

import {RestaurantsNavigator} from './restaurants.navigator';
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/settings/settings.screen";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
     <RestaurantsContextProvider>
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
          headerShown:false
        })}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);