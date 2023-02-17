// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {  getDatabase} from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC98gKMHjvUoNJKvYkO37eMJnn6pW8P20U",
  authDomain: "authentication-8a1dd.firebaseapp.com",
  projectId: "authentication-8a1dd",
  storageBucket: "authentication-8a1dd.appspot.com",
  messagingSenderId: "297810646380",
  appId: "1:297810646380:web:86171b76ac68419c6a4f49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db =getFirestore(app);
export const database = getDatabase(app);
export default app;