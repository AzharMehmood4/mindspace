// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAI63QAAFzcu72D_6DP0cIEUGWznGreQDA",
  authDomain: "mindspace-bf75b.firebaseapp.com",
  projectId: "mindspace-bf75b",
  storageBucket: "mindspace-bf75b.appspot.com",
  messagingSenderId: "414295669298",
  appId: "1:414295669298:web:5c16b7ae99cb88959e1a2b",
  measurementId: "G-FDCC6PRV7N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
