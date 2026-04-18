// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqgzy8AKj3FtCWH-Atu2pzKXoRe7DgEv8",
  authDomain: "e-commerce-website-dbf3e.firebaseapp.com",
  projectId: "e-commerce-website-dbf3e",
  storageBucket: "e-commerce-website-dbf3e.firebasestorage.app",
  messagingSenderId: "770341011301",
  appId: "1:770341011301:web:74d8e97b03aad217672b8c",
  measurementId: "G-RM3B2NQB53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);