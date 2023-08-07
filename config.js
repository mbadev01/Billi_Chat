import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
const instance = {
  apiKey: "AIzaSyAdltVjbWEFmHVgk7Gp8Z9kPmjkASvCQd0",
  authDomain: "billi-chat.firebaseapp.com",
  projectId: "billi-chat",
  storageBucket: "billi-chat.appspot.com",
  messagingSenderId: "417085760997",
  appId: "1:417085760997:web:4e761095e672242dde3b0c",
};

export const app = initializeApp(instance);
export const FIREBASE_APP = initializeApp(instance);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
