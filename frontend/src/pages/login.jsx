import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import ErrorMsg from "../components/ui/ErrorMsg.jsx";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/userAtom.js"; 

const LoginWrap = styled.div`
  .form_wrap{
    width: 100%;
    height: 100vh;
    position: relative;
    background: #fff;

    .login_box{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 560px;
      height: 600px;
      
      h2{
        text-align: center;
        margin-bottom: 20px;
      }
      form{
        .form_group{
          position: relative;
          padding: 0px 50px 0 20px;
          border: 1px solid #ccc;
          border-radius: 5px;

          &:nth-child(1){
            margin-bottom: 25px;
          }

          input{
            width: 100%;
            height: 55px;
            text-align: left;
            font-weight: 400;
            font-size: 15px;
            border: 0;
            padding: 15px 0px 8px;
          }
          .form_label{
            display: inline-block;
            position: absolute;
            top: 18px;
            left: 20px;
            color: #999;
            padding: 0;
            z-index: 1;
            transition: all .2s ease-in;
          }
          &.focus{
            border: 1px solid #000;
            .form_label{
              font-size: 12px;
              font-weight: 400;
              top: 8px;
            }
          }
        }
        .login_btn{
          margin: 40px 0;
          width: 100%;
          height: 60px;
          background: rgb(247, 68, 74);
          box-shadow: 0 15px 16px rgba(247, 68, 78, 0.3);
          text-align: center;
          color: #fff;
          font-size: 18px;
          font-weight: 400;
          border-radius: 5px;
        }
      }
      .menu_list{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        li{
          transition: color 0.2s ease-in;
          &:hover{
            color:#999;
          }
        }
      }
    }
  }
`;


export default function Login(){

  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const inputFields = document.querySelectorAll(".form_group input");

    inputFields.forEach((input) => {
      input.addEventListener("focus", function () {
        this.parentNode.classList.add("focus");
      });

      input.addEventListener("blur", function () {
        if (this.value === "") {
          this.parentNode.classList.remove("focus");
        }
      });
    });

    //이벤트 제거 (클린업 함수)
    return () => {
      inputFields.forEach((input) => {
        input.removeEventListener("focus", function () {
          this.parentNode.classList.add("focus");
        });

        input.removeEventListener("blur", function () {
          if (this.value === "") {
            this.parentNode.classList.remove("focus");
          }
        });
      });
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault(); // 기본 동작 막기

    if (!username || !password) {
      setError("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      // Firebase 로그인 요청
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;

      // Recoil 상태에 로그인 유저 정보 저장
      setUser({
        email: user.email,
        uid: user.uid,
      });
      
      navigate("/main"); // 로그인 성공 시 메인 페이지로 이동
    } catch (error) {
      console.error("로그인 오류:", error);
      setError("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };


  return(
    <LoginWrap>
      <div className="form_wrap">
        <div className="login_box">
          <h2>로그인</h2>
          <form name="loginForm" onSubmit={handleLogin}>
            <div className="form_group">
              <input
                autoComplete="username"
                maxLength={30}
                name="username"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="form_label" htmlFor="username">이메일</label>
            </div>
            <div className="form_group">
              <input
                autoComplete="password"
                maxLength={30}
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="form_label" htmlFor="password">비밀번호</label>
            </div>

            {error && <ErrorMsg message={"에러입니다"} />}

            <button type="submit" className="login_btn">로그인</button>
          </form>
       
          <ul className="menu_list">
            <li>
              <Link to="/signup">회원가입</Link>
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