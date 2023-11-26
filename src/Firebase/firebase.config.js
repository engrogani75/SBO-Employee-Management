// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIXevX-6bQF0nRUJxiniEwxDR6V0H5ue8",
  authDomain: "sbo-employee-management.firebaseapp.com",
  projectId: "sbo-employee-management",
  storageBucket: "sbo-employee-management.appspot.com",
  messagingSenderId: "40754095812",
  appId: "1:40754095812:web:0b7c11db76ce6d45f74b91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);