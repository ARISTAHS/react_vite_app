import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";


const LoginWrap = styled.div`
  .form_wrap{

    .login_box{
      h2{}
      form{
        .id_input{}
        .ps_input{}
      }
      .login_btn{}
      .menu_list{
        li{

        }
      }
    }
  }
`;


export default function Login(){

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // 기본 동작 막기

    if (!username || !password) {
      navigate("/error"); // 에러 페이지로 이동
      return;
    }

    try {
      // Firebase 로그인 요청
      await signInWithEmailAndPassword(auth, username, password);
      navigate("/main"); // 로그인 성공 시 메인 페이지로 이동
    } catch (error) {
      console.error("로그인 오류:", error);
      navigate("/error"); // 로그인 실패 시 에러 페이지로 이동
    }
  };

  return(
    <LoginWrap>
      <div className="form_wrap">
        <div className="login_box">
          <h2>로그인</h2>
          <form name="loginForm" onSubmit={handleLogin}>
            <div className="id_input">
              <input
                autoComplete="username"
                maxLength={30}
                name="username"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">이메일</label>
            </div>
            <div className="ps_input">
              <input
                autoComplete="password"
                maxLength={30}
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">비밀번호</label>
            </div>
          </form>
          <button type="submit" className="login_btn">로그인</button>

          <ul className="menu_list">
            <li>
              <Link to="/main">회원가입</Link>
            </li>
            <li>
              <Link to="/main">아이디찾기</Link>
            </li>
            <li>
              <Link to="/main">비밀번호찾기</Link>
            </li>
          </ul>

        </div>
      </div>
    </LoginWrap>
  );
}