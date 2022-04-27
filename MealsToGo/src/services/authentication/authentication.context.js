import React, {useState, createContext} from 'react';
import {createUserWithEmailAndPassword,signOut, onAuthStateChanged} from "firebase/auth";
import { authentication } from '../../../firebase/firebase-config';
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
const [isLoading, setIsLoading] = useState(false);
const [user, setUser] = useState(null);
const [error, setError] = useState(null);

onAuthStateChanged(authentication, (usr) => {
    if (usr) {
      setUser(usr);
    } else {
       return null;
    }
  });

const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
    .then((u) => {
        setUser(u);
        setIsLoading(false);
    }).catch((e) =>{
        setIsLoading(false);
        if(!email){
            setError("Error : Please provide an email.");
        }
        else if(email && !email.includes("@")){
            setError("Error : Please provide a valid email.");
        }
        else if(!password){
            setError("Error : Please provide a password.");
        }
        else if(password && password.length <= 6){
            setError("Error : Password must be atleast 6 characters.");
        }
        else{
            setError("Error : Invalid Credentials.");
        }
    })
};

const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword){
        setError("Error: Passwords do not match!");
        return;
    }
    createUserWithEmailAndPassword(authentication, email, password)
    .then((u) => {
        setUser(u);
        setIsLoading(false);
    }).catch((e) =>{
        setIsLoading(false);
        setError(e);
    });
};

const onLogout = () =>{
    signOut(authentication).then((re) =>{
        setUser(null);
        setError(null);
        console.log(re);
    }).catch((re) =>{
        console.log(re);
    });
  };

    return(
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}