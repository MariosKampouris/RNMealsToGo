import React, {useContext, useEffect, useState} from 'react';
import {TextInput, Button, TouchableOpacity, SafeAreaView, View, Alert} from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { authentication } from '../../../firebase/firebase-config';

export const SettingsScreen = () => {
    //const [isAuthenticated, setIsAuthenticated] = useState(false);

 //   useEffect(() => {
  //    setTimeout(() => {
   //   signInWithEmailAndPassword(authentication, 'marioswow20@gmail.com', 'marios123')
  //    .then((user) => {
  //      setIsAuthenticated(true);
  //    }).catch((e) =>{
   //     console.log(e);
    //  })}, 2000);
   // }, []);
  
   // console.log(authentication);
  //  if (!isAuthenticated) return null;
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailSignIn, setEmailSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');

  const registerUser = () =>{
    createUserWithEmailAndPassword(authentication, email, password).then((re) =>{
        console.log(re);
        setIsRegistered(true);
    }).catch((re) =>{
        console.log(re);
        emailAlertCall();
    });
  };

  const SignInUser = () =>{
    signInWithEmailAndPassword(authentication, emailSignIn, passwordSignIn).then((re) =>{
        console.log(re);
        setIsSignedIn(true);
    }).catch((re) =>{
        console.log(re);
    });
  };

  const SignOutUser = () =>{
    signOut(authentication, email, password).then((re) =>{
        console.log(re);
        setIsSignedIn(false);
    }).catch((re) =>{
        console.log(re);
    });
  };

  const emailAlertCall = () => {
    Alert.alert(
        "Oops!",
        "Try using a different email!"
    )
  };

  const [focusedInput, setFocusedInput] = useState(false);
  
    return(
        <>
            <SafeAreaView>
                <View style={{padding:25}}>
                    <TextInput onFocus={() => setFocusedInput(true)} onBlur={() => setFocusedInput(false)} style={{padding: 4, borderWidth: 2, borderColor: focusedInput ? 'cyan' : 'black', backgroundColor: 'lightgrey', borderRadius: 10, margin: 4 }} placeholder='Email' value={email} onChangeText={text => setEmail(text)}/>
                    <TextInput style={{padding: 4, borderWidth: 2, borderColor: 'black', backgroundColor: 'lightgrey', borderRadius: 10, margin: 4 }} placeholder='Password' value={password} secureTextEntry={true} onChangeText={text => setPassword(text)}/>
                    <Button title='Register' onPress={registerUser}/>
                </View>
                <View style={{padding:25}}>
                    <TextInput style={{padding: 4, borderWidth: 2, borderColor: 'black', backgroundColor: 'lightgrey' , borderRadius: 10, margin: 4 }} placeholder='Email' value={emailSignIn} onChangeText={text => setEmailSignIn(text)}/>
                    <TextInput style={{padding: 4, borderWidth: 2, borderColor: 'black', backgroundColor: 'lightgrey' , borderRadius: 10, margin: 4 }} placeholder='Password' value={passwordSignIn} secureTextEntry={true} onChangeText={text => setPasswordSignIn(text)}/>
                    <Button title='Sign In' onPress={SignInUser}/>
                </View>
                {isSignedIn === true?
                    <Button title='Sign Out' onPress={SignOutUser}/>
                    :
                    null
                }
            </SafeAreaView>
        </>
    );
};