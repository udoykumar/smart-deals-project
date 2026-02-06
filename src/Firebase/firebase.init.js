// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0BKhOe7I9MyTPhcqVkS-ciD03z5LzSTE",
  authDomain: "smart-deals-7fe38.firebaseapp.com",
  projectId: "smart-deals-7fe38",
  storageBucket: "smart-deals-7fe38.firebasestorage.app",
  messagingSenderId: "865772982603",
  appId: "1:865772982603:web:f4601cecfff1157f14d8ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);