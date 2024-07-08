// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sunglasses-shop-89b3f.firebaseapp.com",
  projectId: "sunglasses-shop-89b3f",
  storageBucket: "sunglasses-shop-89b3f.appspot.com",
  messagingSenderId: "96263704063",
  appId: "1:96263704063:web:6bfced578e4e13f508abca",
  measurementId: "G-PMQF07JMZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
