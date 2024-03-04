// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfLbapJB_4oLdo5K6fxQHbQtwH9m4enz4",
  authDomain: "flower-shop-vid.firebaseapp.com",
  projectId: "flower-shop-vid",
  storageBucket: "flower-shop-vid.appspot.com",
  messagingSenderId: "405651451576",
  appId: "1:405651451576:web:01ce53ce816a124e2d8e4d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;