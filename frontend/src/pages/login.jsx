import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return(
    <LoginWrap>
      <div className="form_wrap">
        <div className="login_box">
          <h2>로그인</h2>
          <form name="loginForm">
            <div className="id_input">
              <input autoComplete="username" maxLength={15} name="username" type="text" />
              <label htmlFor="username">이메일</label>
            </div>
            <div className="ps_input">
              <input autoComplete="password" maxLength={20} name="password" type="text" />
              <label htmlFor="password">비밀번호</label>
            </div>
          </form>
          <button className="login_btn">로그인</button>
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