// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-uuhhv9P38LmQp7csqAA-1yLwOhvmvS0",
  authDomain: "notificacio-push.firebaseapp.com",
  projectId: "notificacio-push",
  storageBucket: "notificacio-push.appspot.com",
  messagingSenderId: "277036843228",
  appId: "1:277036843228:web:580eded1affa3f79713419",
  measurementId: "G-WSSPE5X8PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);