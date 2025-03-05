
const express = require("express"); //express 프레임워크 가져오기 -> 서버 구축용

//const fs = require("fs"); //파일 시스템 모듈 가져온 후 Json 파일 읽기,저장 기능 생성

//const path = require("path");

const cors = require("cors"); // CORS 허용하여 프론트-백엔드 통신 가능하게 함

const db = require("./functions/firebaseAdmin");

const app = express(); //Express 애플리케이션 생성-> 서버 역할

const PORT = 5000; //서버가 실행될 때 포트 번호

// CORS 설정(프론트와 통신)
app.use(cors()); //타 도메인에서 api 호출을 허용
app.use(express.json()); //req.body에서 json 데이터 파싱하는 역할 -> 없으면 읽을 수 없음

// favicon.ico 요청 무시
//app.get("/favicon.ico", (req, res) => res.status(204));

//const filePath = path.join(__dirname, "db.json");  // 현재 폴더 기준으로 경로 설정

// json 파일에서 데이터 읽어오기
// const readData = () => {
//   const rawDate = fs.readFileSync(filePath, "utf-8"); //fs.readFileSync()으로 Json파일 읽어옴
//   return JSON.parse(rawDate); //JSON.parse()으로 Json 객체로 변환 후 반환
// };

// json 데이터 저장 함수 
// const writeDate = (data) => {
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8"); //fs.writeFileSync()으로 Json 파일 저장(업데이트)
// };

// 기본 루트 요청 추가
app.get("/", (req, res) => {
  res.send("백엔드 서버 정상 작동 중!");
});

// 모든 사용자 조회
app.get("/api/users", async (req, res) => {
  try {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    if (snapshot.empty) {
      return res.status(404).json({ message: "사용자가 없습니다." });
    }

    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch (error) {
    console.error("사용자 데이터 가져오기 실패:", error);
    res.status(500).json({ error: "서버 오류 발생" });
  }
});

// 사용자 추가
app.post("/api/users", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const usersRef = db.collection("users");
    const existingUser = await usersRef.where("email", "==", email).get();

    if (!existingUser.empty) {
      return res.status(400).json({ message: "이미 가입된 이메일입니다." });
    }

    const newUserRef = await usersRef.add({ email, password, name });
    res.status(201).json({ message: "사용자 등록 완료", id: newUserRef.id });
  } catch (error) {
    console.error("사용자 추가 오류:", error);
    res.status(500).json({ error: "서버 오류 발생" });
  }
});

// 게시글 추가
app.post("/api/posts", async (req, res) => {
  const { title, content } = req.body;

  try {
    const postsRef = db.collection("posts");
    const newPostRef = await postsRef.add({
      title,
      content,
      createdAt: new Date(),
    });

    res.status(201).json({ message: "게시글 추가 완료", id: newPostRef.id });
  } catch (error) {
    console.error("게시글 추가 오류:", error);
    res.status(500).json({ error: "서버 오류 발생" });
  }
});

//서버 실행
app.listen(PORT, ()=>{
  console.log(`서버 실행 중 : http://localhost:${PORT}`);
});

