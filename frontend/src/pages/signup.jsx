import { useState } from "react";
import styled from "styled-components";
import {registerUser} from "../services/userService";

const SignWrap = styled.div`

`;

export default function SignUp(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitForm = async(e) => {
    e.preventDefault();
    const userDate = {email, password, name};
    const result = await registerUser(userDate);
   
    if(result){
      alert("회원가입 성공");
    }
  };

  return(
    <SignWrap>
      <h2></h2>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">가입하기</button>
      </form>
    </SignWrap>
  );
}