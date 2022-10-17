// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2JLcGcdKg5it3BQQhn9cPp8S_VlI5tqE",
  authDomain: "grydd-508c7.firebaseapp.com",
  projectId: "grydd-508c7",
  storageBucket: "grydd-508c7.appspot.com",
  messagingSenderId: "600624514789",
  appId: "1:600624514789:web:b36f1da8e73d3e8ff9b60c",
  measurementId: "G-631SQ891JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage(app)
export { app, db, analytics, storage };