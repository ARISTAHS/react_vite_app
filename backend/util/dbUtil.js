const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../db.json");

// 🔹 JSON 파일 읽기
const readData = () => {
  const rawData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(rawData);
};

// 🔹 JSON 파일 쓰기
const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
};

module.exports = { readData, writeData };