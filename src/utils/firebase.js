// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK9ObUQTaXgngAmU3QhmvoNFaFLOtw_Cs",
  authDomain: "netflix-gpt-41150.firebaseapp.com",
  projectId: "netflix-gpt-41150",
  storageBucket: "netflix-gpt-41150.appspot.com",
  messagingSenderId: "720324455635",
  appId: "1:720324455635:web:54c7e8a0db5f392de7f826",
  measurementId: "G-PE5BD5XJ5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();