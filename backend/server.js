
const express = require("express"); //express 프레임워크 가져오기 -> 서버 구축용

const fs = require("fs"); //파일 시스템 모듈 가져온 후 Json 파일 읽기,저장 기능 생성

const cors = require("cors"); // CORS 허용하여 프론트-백엔드 통신 가능하게 함

const app = express(); //Express 애플리케이션 생성-> 서버 역할

const PORT = 5000; //서버가 실행될 때 포트 번호.

// CORS 설정(프론트와 통신)
app.use(cors());
app.use(express.json());

// favicon.ico 요청 무시
app.get("/favicon.ico", (req, res) => res.status(204));

// json 파일에서 데이터 읽어오기
const readData = () => {
  const rawDate = fs.readFileSync("backend/db.json", "utf-8");
  return JSON.parse(rawDate);
};

// json 데이터 저장 함수 
const writeDate = (data) => {
  fs.writeFileSync("backend/db.json", JSON.stringify(data, null, 2), "utf-8");
};

// 기본 루트 요청 추가
app.get("/", (req, res) => {
  res.send("백엔드 서버 정상 작동 중!");
});

// 모든 사용자 조회
app.get("/api/users", (req, res) => {
  const data = readData();
  res.json(data.users);
});

// 사용자 추가
app.post("/api.users", (req,res) => {
  const {email, password, name} = req.body;
  const data = readData(); 

  const newUser = {
    id: data.users.length + 1,
    email,
    password, // 비번암호화
    name,
  };
  
  data.users.push(newUser);
  writeDate(data);

  res.status(201).json({message: "사용자 등록 완료", user : newUser});
});

// 게시글 추가
app.post("/api/posts", (req, res) => {
  const {title, content} = req.body;
  const data = readData();

  const newPost = {
    id: data.posts.length + 1,
    title,
    content,
    createdAt : new Data(),
  };

  data.posts.push(newPost);
  writeDate(data);

  res.status(201).json({message: "게시글 추가 완료", post: newPost});
});

// 서버 실행
app.listen(PORT, ()=>{
  console.log(`서버 실행 중 : http://localhost:${PORT}`);
});

