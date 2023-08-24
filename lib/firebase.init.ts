import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUI4wFfeXct-uYD7tNhVBqkUQ9TwFSByw",
  authDomain: "nn-industries.firebaseapp.com",
  projectId: "nn-industries",
  storageBucket: "nn-industries.appspot.com",
  messagingSenderId: "294561259154",
  appId: "1:294561259154:web:d2cce053b79e1a41f7d04b",
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase services
const firestore = getFirestore(app);
const auth = getAuth(app);

// Expose the instances we'll need
export { app, firestore, auth };
