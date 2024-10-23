// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByPaaqF5sA6tMMmTL0Vq4YKufcAzyXC0A",
  authDomain: "netflixgpt-1d3f3.firebaseapp.com",
  projectId: "netflixgpt-1d3f3",
  storageBucket: "netflixgpt-1d3f3.appspot.com",
  messagingSenderId: "61930295552",
  appId: "1:61930295552:web:864daeb127418fec79e3e5",
  measurementId: "G-JXT1D5DE4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();