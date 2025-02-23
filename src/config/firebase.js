// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGTc9pLHESR046iH04QxM6IqB1F4qTesM",
  authDomain: "fencingweb-a6cc5.firebaseapp.com",
  projectId: "fencingweb-a6cc5",
  storageBucket: "fencingweb-a6cc5.firebasestorage.app",
  messagingSenderId: "280938600226",
  appId: "1:280938600226:web:fb64f6e15882df9cd3377b",
  measurementId: "G-GCKJ99QG50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);