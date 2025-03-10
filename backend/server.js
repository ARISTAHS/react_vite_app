require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./api/authAPI");

const app = express();
const PORT = 5000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 라우트 설정
app.use("/api/auth", authRoutes); // 회원가입, 로그인 API

// 기본 라우트
app.get("/", (req, res) => {
  res.send("백엔드 서버 정상 작동 중!");
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});