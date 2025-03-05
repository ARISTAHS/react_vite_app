const admin = require("firebase-admin");
const path = require("path");

// Firebase 서비스 계정 JSON 파일 로드 (경로 확인 필수!)
const serviceAccountPath = path.join(__dirname, "./firebase.json");

let serviceAccount;
try {
  serviceAccount = require(serviceAccountPath);
} catch (error) {
  console.error("Firebase JSON 파일을 찾을 수 없습니다.", error);
}

// Firebase Admin SDK 초기화
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore(); // Firestore 데이터베이스 객체 생성
module.exports = db; // Firestore 내보내기