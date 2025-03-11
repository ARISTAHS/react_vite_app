import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../config/firebase";
import LogoutButton from "./LogoutButton";
import { useAuthState } from "react-firebase-hooks/auth";

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;

  .sub_box{
    .sub_list{
      list-style: none;
      display: flex;
      gap: 20px;

      li{
        font-size: 1.2rem;
        color: #000;
        a{
          text-decoration: none;
          color: inherit;
        }
        &:hover {
          color: #ff6347;
        }
      }
    }
  }
  .etc_box{
    .etc_list{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      li{
        color: #666;
        font-size: 0.9rem;
        text-align: center;
        height: 22px;

        a{
          display: inline-flex;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        button{
          font-size: 0.9rem;
          color: #666;
          height: 100%;
        }
      }
    }
  }
`;


export default function Gnb() {

  const navLi = [
    { label : "Home" , path : ""},
    { label : "About" , path : "about"},
    { label : "Product" , path : "product"},
    { label : "Contact" , path : "contact"},
  ];

  const [authUser] = useAuthState(auth); // 현재 로그인 상태 확인

  return (
    <Nav>
      <div className="sub_box">
        <ul className="sub_list">
          {/* 반복되는 li 태그를 map 함수로 수정 */}
          {navLi.map((link)=>(
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="etc_box">
        <ul className="etc_list">
        {authUser ? (
          <>
            <li>
              <LogoutButton />
            </li>
            <li>
              <Link to="/profile">정보수정</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
        </ul>
      </div>
      
    </Nav>
  );
}

