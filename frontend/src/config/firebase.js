import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // 🔥 Firebase 인증 추가
import { getAnalytics } from "firebase/analytics"; // 웹사이트 방문자 분석 가능
import config from "./config";

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
  measurementId: config.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

//Firebase Authentication (로그인/회원가입 기능 추가)
const auth = getAuth(app); 

export { app, auth, analytics };