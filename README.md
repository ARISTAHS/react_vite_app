# 📌React + Vite 개인포폴
- 개인 포트폴리오를 위한 사이트 재구축.
- 대상 사이트는 국내 스포츠 판매 사이트 '프리모상사'를 선정.
  - 주소 : "http://www.primosports.co.kr/"
  - 주소 : "https://www.allstar.de/en/"
- 단, 타 쇼핑몰 사이트 형식으로 재구축 하지 않음.
- 1차 Front 완성 후 2차 Back 작업.
- Firebase 로그인 인증 연동 작업. 


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
📁backend
├── api                     # API 관련 라우트 폴더
│   ├── authAPI.js          # 인증 관련 API 라우트
│   ├── userAPI.js          # 사용자 관련 API 라우트
│
├── config                  # 환경 설정 폴더
│   ├── config.js           # 환경변수 설정
│   ├── firebaseConfig.js   # Firebase 설정
│
├── controllers             # 컨트롤러 폴더
│   ├── authController.js   # 인증 관련 로직 처리
│
├── util                    # 유틸리티 함수 폴더
│   ├── dbUtil.js           # DB 관련 유틸리티 함수
│
├── .env                    # 환경변수 설정 파일
├── .gitignore              # Git 무시 파일 목록
├── db.json                 # 로컬 JSON 데이터베이스
├── package-lock.json       # npm 패키지 관리 파일
├── package.json            # 백엔드 패키지 설정 파일
├── server.js               # 백엔드 서버 설정

📁frontend
├── public                  # 정적 파일 (이미지, 폰트 등)
│   ├── assets              # 이미지 절대 경로 사용
│
├── src                     # 소스 코드 폴더
│   ├── components          # UI 및 공통 컴포넌트 모음
│   │   ├── common          # 헤더, 푸터, 네비게이션 등 공통 레이아웃
│   │   │   ├── AuthStatus.jsx     # 인증 상태 관리
│   │   │   ├── Footer.jsx         # 푸터
│   │   │   ├── Gnb.jsx            # 글로벌 네비게이션 바
│   │   │   ├── Header.jsx         # 헤더
│   │   │   ├── LogoutButton.jsx   # 로그아웃 버튼
│   │   │
│   │   ├── ui              # UI 관련 컴포넌트 (페이지네이션, 팝업 등)
│   │   │   ├── ErrorMsg.jsx       # 에러 메시지 UI
│   │   │   ├── Link.jsx           # 링크 컴포넌트
│   │   │   ├── MainSlide.jsx      # 메인 슬라이드
│   │   │   ├── Map.jsx            # 카카오 맵 API
│   │   │   ├── Pagination.jsx     # 페이지네이션
│   │   │   ├── Popup.jsx          # 팝업 UI
│   │   │   ├── ProductData.jsx    # 상품 데이터 UI
│   │   │   ├── TopButton.jsx      # 최상단 이동 버튼
│   │   │   ├── Layout.jsx         # 기본 레이아웃 컴포넌트
│
│   ├── config             # 설정 관련 파일 모음
│   │   ├── config.js      # API 키 및 환경변수 관리
│   │   ├── firebase.js    # Firebase 설정 파일
│
│   ├── pages              # 개별 페이지 컴포넌트
│   │   ├── About.jsx      # About 페이지
│   │   ├── Contact.jsx    # Contact 페이지
│   │   ├── Home.jsx       # 홈 페이지
│   │   ├── Intro.jsx      # 소개 페이지
│   │   ├── Login.jsx      # 로그인 페이지
│   │   ├── Product.jsx    # 제품 페이지
│   │   ├── Profile.jsx    # 프로필 수정 페이지
│   │   ├── Signup.jsx     # 회원가입 페이지
│   │   ├── UserList.jsx   # 유저 목록 페이지
│
│   ├── api           # API 호출 및 서비스 로직 관리
│   │   ├── postAPI.js # 게시글 관련 서비스
│   │   ├── userAPI.js # 유저 관련 서비스
│
│   ├── App.jsx            # 루트 컴포넌트
│   ├── main.jsx           # 애플리케이션 진입점
│
├── .env                   # 환경 변수 설정 파일
├── .gitignore             # Git 무시 파일
├── eslint.config.js       # ESLint 설정 파일
├── index.html             # 기본 HTML 파일
├── package-lock.json      # npm 패키지 관리 파일
├── package.json           # 프론트엔드 패키지 설정 파일
├── vite.config.js         # Vite 설정 파일
```
