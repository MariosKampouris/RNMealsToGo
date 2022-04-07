import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyEQihuLBuACdNtlivfWNZqf6KDXduN1k",
    authDomain: "mealstogo-b3cc7.firebaseapp.com",
    projectId: "mealstogo-b3cc7",
    storageBucket: "mealstogo-b3cc7.appspot.com",
    messagingSenderId: "975184955974",
    appId: "1:975184955974:web:e088d2b756f5a9756c9847"
  };

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);