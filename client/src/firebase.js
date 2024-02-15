// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-79024.firebaseapp.com",
  projectId: "mern-estate-79024",
  storageBucket: "mern-estate-79024.appspot.com",
  messagingSenderId: "480562405112",
  appId: "1:480562405112:web:2ed14c79f8a3969c81250d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);