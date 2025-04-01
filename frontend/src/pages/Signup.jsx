import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UpdateUser } from "../api/usersAPI";

const SignWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #fff;

  .sign_box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 560px;
    height: 600px;

    h2{
      text-align: center;
      margin-bottom: 40px;
    }
    form{
      .form_group{
        position: relative;
        padding: 0px 50px 0 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 25px;
        input{
          width: 100%;
          height: 55px;
          text-align: left;
          font-weight: 400;
          font-size: 15px;
          border: 0;
          padding: 15px 0px 8px;
        }
      }
      .sign_btn{
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
  }
`;

export default function SignUp(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const navigate = useNavigate();

  const submitForm = async(e) => {
    e.preventDefault();
    const userDate = {email, password, name};
    const result = await UpdateUser(userDate);
   
    if(result){
      alert("회원가입 성공");
      navigate("/login");
    }else{
      alert("다시 시도하세요");
    }
  };

  return(
    <SignWrap>
      <div className="sign_box">
        <h2>회원가입</h2>
        <form onSubmit={submitForm}>
          <div className="form_group">
            <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form_group">
            <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form_group">
            <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        
          <button type="submit" className="sign_btn">가입하기</button>
        </form>
      </div>
      
    </SignWrap>
  );
}