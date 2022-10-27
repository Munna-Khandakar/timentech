// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnPUMcy6Ku68ObXhQWjWeDh-iIfwV4UqI",
  authDomain: "timentech-prod.firebaseapp.com",
  projectId: "timentech-prod",
  storageBucket: "timentech-prod.appspot.com",
  messagingSenderId: "512211552443",
  appId: "1:512211552443:web:e37cd2210c7b86499a419e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
