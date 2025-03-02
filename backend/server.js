
const express = require("express"); //express 프레임워크 가져오기 -> 서버 구축용

const fs = require("fs"); //파일 시스템 모듈 가져온 후 Json 파일 읽기,저장 기능 생성

const path = require("path");

const cors = require("cors"); // CORS 허용하여 프론트-백엔드 통신 가능하게 함

const app = express(); //Express 애플리케이션 생성-> 서버 역할

const PORT = 5000; //서버가 실행될 때 포트 번호

// CORS 설정(프론트와 통신)
app.use(cors()); //타 도메인에서 api 호출을 허용
app.use(express.json()); //req.body에서 json 데이터 파싱하는 역할 -> 없으면 읽을 수 없음

// favicon.ico 요청 무시
app.get("/favicon.ico", (req, res) => res.status(204));

const filePath = path.join(__dirname, "db.json");  // 현재 폴더 기준으로 경로 설정

// json 파일에서 데이터 읽어오기
const readData = () => {
  const rawDate = fs.readFileSync(filePath, "utf-8"); //fs.readFileSync()으로 Json파일 읽어옴
  return JSON.parse(rawDate); //JSON.parse()으로 Json 객체로 변환 후 반환
};

// json 데이터 저장 함수 
const writeDate = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8"); //fs.writeFileSync()으로 Json 파일 저장(업데이트)
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
app.post("/api/users", (req,res) => {

  console.log("요청 도착", req.body); // 요청 데이터 확인

  const {email, password, name} = req.body;
  const data = readData(); 

  console.log("현재 데이터:", data); // 기존 데이터 확인

  if (!data || !data.users) {
    console.error("데이터 로드 실패");
    return res.status(500).json({ error: "서버 내부 오류: 데이터 로드 실패" });
  }

  // 중복 이메일 체크
  const existingUser = data.users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "이미 가입된 이메일입니다." });
  }

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
    createdAt : new Date(), // 현재 날짜 저장
  };

  data.posts.push(newPost);
  writeDate(data);

  res.status(201).json({message: "게시글 추가 완료", post: newPost});
});

// 서버 실행
app.listen(PORT, ()=>{
  console.log(`서버 실행 중 : http://localhost:${PORT}`);
});

