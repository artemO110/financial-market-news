// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzk2zQyE2m7H8_3bVsbsARL58dcb95bAA",
    authDomain: "financial-market-b5658.firebaseapp.com",
    projectId: "financial-market-b5658",
    storageBucket: "financial-market-b5658.appspot.com",
    messagingSenderId: "572883842911",
    appId: "1:572883842911:web:e9d772cefd7371466ca8ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);