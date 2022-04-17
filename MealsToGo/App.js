import React, {useState, useEffect} from "react";
import { StatusBar, StyleSheet} from "react-native";
import 'react-native-gesture-handler';

import { authentication } from "./firebase/firebase-config";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";

import {Navigation} from './src/infrastructure/navigation/index'

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { useFonts } from 'expo-font';

  export default function App() {

    let [fontsLoaded] = useFonts({
      'Oswald_400Regular': require('./assets/fonts/Oswald_400Regular.ttf'),
      'Lato_400Regular': require('./assets/fonts/Lato_400Regular.ttf')
      });

    return (
      <> 
      <StatusBar style="auto" />
      <AuthenticationContextProvider>
             <Navigation/>
      </AuthenticationContextProvider>
      </>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
