import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

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
    font-family: 'Arial', sans-serif;
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

`;

//라우터 설정
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>, // 임시로 Home Page 컴포넌트
  },
  {
    path: "/about",
    element: <div>About Page</div>, // 임시로 About Page 컴포넌트
  },
]);

function App() {
  
  return (
    <>
      <GlobalStyle /> {/* 전역 스타일 적용 */}
      <RouterProvider router={router} /> {/* RouterProvider로 라우터 설정 */}
    </>
  )
}

export default App
