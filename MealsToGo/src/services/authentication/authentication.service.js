import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { authentication } from '../../../firebase/firebase-config';

export const loginRequest = (email, password) => 
    signInWithEmailAndPassword(authentication, email, password);
;