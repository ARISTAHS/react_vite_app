const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", registerUser); // 회원가입 엔드포인트
router.post("/login", loginUser); // 로그인 엔드포인트

module.exports = router;