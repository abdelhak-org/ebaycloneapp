// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_4vUmKZU9Tt44n4M9rqloD8JoZEmRo6M",
  authDomain: "kleinanzeige-3cbec.firebaseapp.com",
  projectId: "kleinanzeige-3cbec",
  storageBucket: "kleinanzeige-3cbec.appspot.com",
  messagingSenderId: "6207661374",
  appId: "1:6207661374:web:876c76b5f92341221c786f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

