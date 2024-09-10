// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtX2e59Bg1O6WZtlPmZQwexCWCLchI2t8",
  authDomain: "coursera-56fdc.firebaseapp.com",
  projectId: "coursera-56fdc",
  storageBucket: "coursera-56fdc.appspot.com",
  messagingSenderId: "979972073762",
  appId: "1:979972073762:web:ace2be3a4460230325dd7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
