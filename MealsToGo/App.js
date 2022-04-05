import React, {useState, useEffect} from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';

import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import {Navigation} from './src/infrastructure/navigation/index'

const firebaseConfig = {
  apiKey: "<AIzaSyAyEQihuLBuACdNtlivfWNZqf6KDXduN1k>",
  authDomain: "<mealstogo-b3cc7.firebaseapp.com>",
  projectId: "<mealstogo-b3cc7>",
  storageBucket: "<mealstogo-b3cc7.appspot.com>",
  messagingSenderId: "<975184955974>",
  appId: "<1:975184955974:web:e088d2b756f5a9756c9847>"
};

const app = initializeApp(firebaseConfig);
//initializeApp(config);
const auth = getAuth(app);
//const auth = getAuth();

  export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    signInWithEmailAndPassword(auth, '<marioswow20@gmail.com>', '<marios123>')
    .then((user) => {
      setIsAuthenticated(true);
    }).catch((e) =>{
      console.log(e);
    });
  }, []);

  if (isAuthenticated) return null;

    return (
      <> 
      <StatusBar style="auto" />
      <FavouritesContextProvider>
        <LocationContextProvider>
         <RestaurantsContextProvider>
            <Navigation/>
          </RestaurantsContextProvider>
       </LocationContextProvider>
      </FavouritesContextProvider>
      </>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
