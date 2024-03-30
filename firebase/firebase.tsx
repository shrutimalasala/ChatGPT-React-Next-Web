// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD41laDfkbXBeT41vRVmuZQ8YYZdIQNsE",
  authDomain: "cashflowpro-1cd9e.firebaseapp.com",
  projectId: "cashflowpro-1cd9e",
  storageBucket: "cashflowpro-1cd9e.appspot.com",
  messagingSenderId: "155956395980",
  appId: "1:155956395980:web:3da258f462432aac28a769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;