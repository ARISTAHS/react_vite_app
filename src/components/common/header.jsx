import styled from "styled-components";
import Gnb from './gnb';
import { Link } from "react-router-dom";
import mainLogo from '../../assets/logo_main.png'

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
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h1`
  display: block;
  /* width: 120px; */
  border: 1px solid #111;
  height: 100%;

  a{
    display: flex;
    align-items: center;
    height: 100%;
    img{
      width: 100%;
    }
  }
`;

export default function Header(){
  return(
    <HeaderWrapper>
      <HeaderWrap>
        <Logo>
          <Link to='/'><img src={mainLogo} alt="프리모상사 로고" /></Link>
        </Logo>
      
        <Gnb />
      </HeaderWrap>
    </HeaderWrapper>
  );
}