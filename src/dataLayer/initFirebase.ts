import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByj5JoW8DOBUCMnHzz5QWsAeC62C00GsY",
  authDomain: "karolio-portfolio-web.firebaseapp.com",
  projectId: "karolio-portfolio-web",
  storageBucket: "karolio-portfolio-web.appspot.com",
  messagingSenderId: "635028628505",
  appId: "1:635028628505:web:c9dbeb8694de8fd2a0b688",
  measurementId: "G-STK14QJ23D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);
export const fbFunctions = getFunctions(app, "europe-west3");