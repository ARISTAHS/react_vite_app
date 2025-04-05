import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import { RecoilRoot } from "recoil";
import reset from "styled-reset";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Contact from "./pages/Contact.jsx";
import Intro from "./pages/Intro.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
import UserList from "./pages/UserList.jsx";


//라우터 설정
const router = createBrowserRouter([
  {
    path: "/main",
    element: <Layout/>,
    children: [
      { path: "" , element: <Home />},
      { path: "about" , element: <About />},
      { path: "product" , element: <Product />},
      { path: "contact" , element: <Contact />},
    ],
  },
  {
    path:"/",
    element:<Intro/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/signup",
    element:<SignUp/>,
  },
  {
    path:"/profile",
    element:<Profile/>,
  },
  {
    path:"/userList",
    element:<UserList />,
  }
]);

//전역 css + 리셋
const GlobalStyle = createGlobalStyle`
  ${reset};
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: top;
  }

  body {
    font-family: 'NanumSquare', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  a:focus {
  outline: 2px dashed #fff;
  outline-offset: 4px;
  }
  
  input[type=text] , input[type=email] ,input[type=password] {
  outline: none;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d9e0e6;
  }

  input:focus{outline: none;}

  button{
    cursor: pointer;
    border: none;
    background-color: #fff;
  }

  button:focus{border: none;}

  .hidden{
    display: none;
  }

  /* 메인 공통 css */
  .container{
    max-width: 1920px;
    margin: 0 auto 100px;
    position: relative;
  }

  h2{
    font-size: 3.75rem;
    font-weight: 700;
    color: #000;
  }

`;

function App() {
  
  return (
    <>
      <RecoilRoot>
        <GlobalStyle /> {/* 전역 스타일 적용 */}
        <RouterProvider router={router} /> {/* RouterProvider로 라우터 설정 */}
      </RecoilRoot>
    </>
  )
}

export default App;