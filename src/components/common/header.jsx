import styled from "styled-components";
import Gnb from './gnb';
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
const HeaderWrap = styled.div`
  height: 100px;
  max-width: 1660px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h1`
  
  a{
    display: inline-block;
    height: 100%;
    
  }
`;

export default function Header(){
  return(
    <HeaderWrapper>
      <HeaderWrap></HeaderWrap>
      <Logo>
        <Link to='/'><img src="" alt="" /></Link>
      </Logo>
    
      <Gnb />
    </HeaderWrapper>
  );
}