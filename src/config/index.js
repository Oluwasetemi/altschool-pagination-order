// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA88vNAB-7DaaHqKZ-6cZQibru3A4dfr_k",
  authDomain: "altschool-pagination.firebaseapp.com",
  projectId: "altschool-pagination",
  storageBucket: "altschool-pagination.appspot.com",
  messagingSenderId: "927434573731",
  appId: "1:927434573731:web:08a93f74ec6b89bcb8fc16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app