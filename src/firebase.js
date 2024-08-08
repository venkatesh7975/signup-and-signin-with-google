// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkBgMk-qHMQC87z5tBQHOb6ypzC1GT02A",
  authDomain: "login2fa-84f98.firebaseapp.com",
  projectId: "login2fa-84f98",
  storageBucket: "login2fa-84f98.appspot.com",
  messagingSenderId: "754511644013",
  appId: "1:754511644013:web:8f1efb5c8f1efb5c8f1efb5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
