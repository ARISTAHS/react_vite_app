const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

//CORS 설정(프론트와 통신)
app.use(cors());
app.use(express.json());

//json 파일에서 데이터 읽어오기
const dateRead = () => {
  const rawDate = fs.readFileSync("backend/db.json", "utf-8");
  return JSON.parse(rawDate);
};
