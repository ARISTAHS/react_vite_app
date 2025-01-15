import styled from "styled-components";
import { Link } from "react-router-dom";
import logoBlack from '../../assets/main_logo_black.png';

const FooterWrapper = styled.footer`
  background-color: #333;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

const FooterWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 100px;
  padding: 100px 0;
  margin: 0 auto;
  max-width: 1400px;
`;

const FooterLogo = styled.div`
  flex: 0 0 auto;
  a{
    display: block;
    width: 200px;
    img{
      width: 100%;
      border-radius: 50%;
      border: 2px solid #fff;
    }
  }
`;

const FooterInfo = styled.div`
  /* width: 950px; */
  flex: 1;
  color: #fff;
  
  ul{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30rem;
    margin-bottom: 1.875rem;
    li{
      font-weight: 600;
      font-size: 1.125rem;
      p{

      }
    }
  }

  address{
    
    p{
      /* color: #fff; */
      strong{
        color: #fcfcfc;
      }
    }
  }
`;

const CopyRight = styled.div`
  
  p{
    color: white;
    line-height: 1.3;
    span{

    }
  }
`;


export default function Footer(){
  return(
    <FooterWrapper>
      <FooterWrap>
        <FooterLogo>
          <Link to='/'>
            <img src={logoBlack} alt="로고_Black" />
          </Link>
        </FooterLogo>
        <FooterInfo>
          <ul>
            <li>
              <Link to='/'><p>개인정보처리방침</p></Link>
            </li>
            <li>
              <Link to='/'><p>이용약관</p></Link>
            </li>
          </ul>
          <address>
            <p>
              <strong>주소</strong>
              <span></span>
            </p>
            <p>
              <strong>우편번호</strong>
              <span></span>
            </p>
            <p>
              <strong>전화</strong>
              <span></span>
            </p>
            <p>
              <strong>팩스</strong>
              <span></span>
            </p>
            <p>
              <strong>팩스</strong>
              <span></span>
            </p>
          </address>

          <CopyRight>
            <p><span>&copy;</span> 2025. Primo Sports. All rights reserved. <br />
            | 본 사이트는 개인 포트폴리오 프로젝트로 상업적 목적이 아닌 학습 목적으로 제작되었습니다.</p>
          </CopyRight>

        </FooterInfo>
      </FooterWrap>
    </FooterWrapper>
  );
}