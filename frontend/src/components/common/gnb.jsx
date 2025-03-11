import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../../config/firebase";

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
        /* width: 60px; */
        color: #666;
        font-size: 0.9rem;

        a{
          display: block;
          width: 100%;
          
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

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 현재 로그인한 사용자 감지
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // 구독 해제
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/main");
  };

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
        {user ? (
          <>
            <li>
              <Link to="#" onClick={(e)=>{
                e.preventDefault();
                handleLogout(); // 로그아웃 실행
              }}>로그아웃</Link>
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

