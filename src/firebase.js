// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASx2SWxQDt5r9utAdIblXpE7yWY8V3wFI",
  authDomain: "clone-901f7.firebaseapp.com",
  projectId: "clone-901f7",
  storageBucket: "clone-901f7.appspot.com",
  messagingSenderId: "789997361775",
  appId: "1:789997361775:web:9e425c9e7483d426198b9a",
  measurementId: "G-RYH1GR7CMM",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export {auth, db};
