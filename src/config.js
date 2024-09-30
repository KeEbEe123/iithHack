// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWNQYKCa7pMlKmGJ9fRK-GDiS5oyQGrxs",
  authDomain: "plant-disease-detector-f9e53.firebaseapp.com",
  projectId: "plant-disease-detector-f9e53",
  storageBucket: "plant-disease-detector-f9e53.appspot.com",
  messagingSenderId: "30536261560",
  appId: "1:30536261560:web:6d34672e7cbc2391fc794d",
  measurementId: "G-6LYLRNLE5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
