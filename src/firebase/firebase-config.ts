// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAU9LzHVhsjf2IlZ3rj4XNPJE6WRUZ8rk",
  authDomain: "air-quality-monitoring-s-81a8b.firebaseapp.com",
  databaseURL:
    "https://air-quality-monitoring-s-81a8b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "air-quality-monitoring-s-81a8b",
  storageBucket: "air-quality-monitoring-s-81a8b.appspot.com",
  messagingSenderId: "431414715691",
  appId: "1:431414715691:web:fb8270a32db1b97e00516e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
