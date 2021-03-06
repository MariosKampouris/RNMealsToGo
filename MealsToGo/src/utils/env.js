import {Platform} from "react-native";

const liveHost = 'https://us-central1-mealstogo-b3cc7.cloudfunctions.net';
const localHost = 'http://localhost:5001/mealstogo-b3cc7/us-central1';

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isMock = false;

export const host = !isDevelopment || isAndroid ? liveHost : localHost;
// We need liveHost in order for Android to work. http does not work on Android.
//export const host = liveHost;