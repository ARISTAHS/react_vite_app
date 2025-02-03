# React + Vite 개인포폴
- 개인 포트폴리오를 위한 사이트 재구축 
- 대상 사이트는 국내 스포츠 판매 사이트 '프리모상사'를 선정
  - 주소 : "http://www.primosports.co.kr/"
- 단, 타 쇼핑몰 사이트 형식으로 재구축 하지 않음.
- 1차 Front 완성 후 2차 Back단 작업 예정 


## 사용 스택 
  ### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white)

  ### Styling
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)

  ### Version Control
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)


## 프로젝트 구조
📁 src/ ├── 📁 components/ # UI 및 공통 컴포넌트 모음 │ ├── 📁 common/ # 헤더, 푸터, 네비게이션 등 공통 레이아웃 │ │ ├── footer.jsx │ │ ├── gnb.jsx │ │ ├── header.jsx │ │ │ ├── 📁 ui/ # UI 관련 컴포넌트 (페이지네이션, 팝업 등) │ │ ├── link.jsx │ │ ├── mainSlide.jsx │ │ ├── pagination.jsx │ │ ├── popup.jsx │ │ ├── productData.jsx │ │ │ ├── layout.jsx # 기본 레이아웃 컴포넌트 │ ├── 📁 pages/ # 개별 페이지 컴포넌트 │ ├── about.jsx │ ├── contact.jsx │ ├── home.jsx │ ├── intro.jsx │ ├── login.jsx │ ├── product.jsx │ ├── App.jsx # 전체 애플리케이션의 루트 컴포넌트 ├── main.jsx # React 앱의 진입점 │ ├── 📁 public/ # 정적 파일 (이미지, 폰트 등) │ ├── 📁 assets/ │ │ ├── vite.svg │ ├── index.html # HTML 진입점 ├── index.css # 전역 스타일 ├── package.json # 프로젝트 설정 및 종속성 관리 ├── README.md # 프로젝트 설명 파일 └── vite.config.js # Vite 설정 파일