// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQnk5ivtdtCxANY8plzgicj1EjghihU0I",
  authDomain: "fateflix-codeofmohit.firebaseapp.com",
  projectId: "fateflix-codeofmohit",
  storageBucket: "fateflix-codeofmohit.appspot.com",
  messagingSenderId: "716166763888",
  appId: "1:716166763888:web:3bbb7871d051337c3e2bb5",
  measurementId: "G-Y68HXP68EH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
