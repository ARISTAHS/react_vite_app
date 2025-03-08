const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("../config/firebaseConfig"); // Firebase 인증 불러오기
const { readData, writeData } = require("../utils/dbUtils"); // 로컬 DB 처리 함수 (아래 설명 참고)

// 회원가입 API
const registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Firebase에서 회원가입 처리
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 로컬 db.json에도 추가
    const data = readData();
    const newUser = {
      id: data.users.length + 1,
      email,
      password, // 암호화 필수
      name,
      firebaseUID: user.uid, // Firebase 고유 UID 저장
    };

    data.users.push(newUser);
    writeData(data);

    res.status(201).json({ message: "회원가입 성공", user: newUser });
  } catch (error) {
    console.error("회원가입 실패:", error);
    res.status(500).json({ error: error.message });
  }
};

// 로그인 API
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Firebase에서 로그인 처리
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    res.status(200).json({ message: "로그인 성공", user: user.email });
  } catch (error) {
    console.error("로그인 실패:", error);
    res.status(401).json({ error: "로그인 실패. 이메일 또는 비밀번호를 확인하세요." });
  }
};

module.exports = { registerUser, loginUser };