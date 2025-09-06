// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1FG7BHpmAJ9eJxHx-Z6riNbB7xRwSjSM",
  authDomain: "auth-exclusive-b1.firebaseapp.com",
  projectId: "auth-exclusive-b1",
  storageBucket: "auth-exclusive-b1.firebasestorage.app",
  messagingSenderId: "374902733433",
  appId: "1:374902733433:web:b6832b20b58882a1c2f2a8",
  measurementId: "G-CLZS7CDB8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)