# 📌React + Vite 개인포폴
- 개인 포트폴리오를 위한 사이트 재구축.
- 대상 사이트는 국내 스포츠 판매 사이트 '프리모상사'를 선정.
  - 주소 : "http://www.primosports.co.kr/"
  - 주소 : "https://www.allstar.de/en/"
- 단, 타 쇼핑몰 사이트 형식으로 재구축 하지 않음.
- 1차 Front 완성 후 2차 Back 작업 예정.


## 📌사용 스택 
  ### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white)

  ### Backend
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=Express&logoColor=white)

  ### Styling
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)

  ### Version Control
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)


## 📌포폴 파일 구조 ※추후 변동 가능

```
 📂 backend            # 백엔드 관련 파일
 ┣ 📜 .gitignore     # Git 무시 파일
 ┣ 📜 package-lock.json # npm 패키지 관리 파일
 ┣ 📜 package.json   # 백엔드 패키지 설정 파일
 ┗ 📜 server.js      # 백엔드 서버 설정

📂 frontend           # 프론트엔드 관련 파일
 ┣ 📂 public         # 정적 파일 (이미지, 폰트 등)
 ┃ ┗ 📂 assets      # 이미지 절대 경로 이용
 ┣ 📂 src           # 소스 코드 폴더
 ┃ ┣ 📂 components  # UI 및 공통 컴포넌트 모음
 ┃ ┃ ┣ 📂 common    # 헤더, 푸터, 네비게이션 등 공통 레이아웃
 ┃ ┃ ┃ ┣ 📜 AuthStatus.jsx # 인증 상태 관리
 ┃ ┃ ┃ ┣ 📜 footer.jsx
 ┃ ┃ ┃ ┣ 📜 gnb.jsx
 ┃ ┃ ┃ ┗ 📜 header.jsx
 ┃ ┃ ┣ 📂 ui        # UI 관련 컴포넌트 (페이지네이션, 팝업 등)
 ┃ ┃ ┃ ┣ 📜 link.jsx
 ┃ ┃ ┃ ┣ 📜 mainSlide.jsx
 ┃ ┃ ┃ ┣ 📜 pagination.jsx
 ┃ ┃ ┃ ┣ 📜 popup.jsx
 ┃ ┃ ┃ ┣ 📜 productData.jsx
 ┃ ┃ ┃ ┣ 📜 map.jsx  # 카카오 맵 API 컴포넌트
 ┃ ┃ ┃ ┣ 📜 topButton.jsx  # 최상단 이동 버튼
 ┃ ┃ ┃ ┗ 📜 layout.jsx  # 기본 레이아웃 컴포넌트
 ┃ ┣ 📂 config       # 설정 관련 파일 모음
 ┃ ┃ ┣ 📜 config.js  # API 키 및 환경변수 관리
 ┃ ┃ ┗ 📜 firebase.js # Firebase 설정 파일
 ┃ ┣ 📂 pages        # 개별 페이지 컴포넌트
 ┃ ┃ ┣ 📜 about.jsx
 ┃ ┃ ┣ 📜 contact.jsx
 ┃ ┃ ┣ 📜 home.jsx
 ┃ ┃ ┣ 📜 intro.jsx
 ┃ ┃ ┣ 📜 login.jsx
 ┃ ┃ ┣ 📜 product.jsx
 ┃ ┃ ┗ 📜 signup.jsx
 ┃ ┣ 📜 App.jsx       # 루트 컴포넌트
 ┃ ┣ 📜 main.jsx      # 애플리케이션 진입점
 ┃ ┗ 📜 index.css     # 전역 스타일
 ┣ 📜 .env           # 환경 변수 설정 파일
 ┣ 📜 .gitignore     # Git 무시 파일
 ┣ 📜 eslint.config.js # ESLint 설정 파일
 ┣ 📜 index.html     # 기본 HTML 파일
 ┣ 📜 package-lock.json # npm 패키지 관리 파일
 ┣ 📜 package.json   # 프론트엔드 패키지 설정 파일
 ┗ 📜 vite.config.js  # Vite 설정 파일
```