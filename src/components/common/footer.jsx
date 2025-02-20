import styled from "styled-components";
import { Link } from "react-router-dom";
import logoBlack from '/assets/main_logo_black.png';

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
    gap: 3rem;
    margin-bottom: 1.875rem;
    li{
      font-weight: 600;
      font-size: 1.125rem;
    }
  }

  address{
    margin-bottom: 0.5rem;
    display: flex;
    flex-wrap: wrap;

    p{
      flex: 0 0 calc(50% - 10px);
      padding-bottom: 0.325rem;
      strong{
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
        margin-right: 0.625rem;
      }
      span{
        font-weight: 500;
        color: #fff;
        font-size: 1.1rem;
      }
    }
  }
`;

const CopyRight = styled.div`
  
  p{
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: -0.03em;
    line-height: 1.3;
  }
`;


export default function Footer(){

  const addressTex = [
    {
      id:1,
      tit : '주소',
      txt : '서울특별시 강동구 양재대로 85길 30 이성빌딩 303호',
    },
    {
      id:2,
      tit : '우편번호',
      txt : '05405',
    },
    {
      id:3,
      tit : '전화',
      txt : '02-474-0697~8',
    },
    {
      id:4,
      tit : 'E-mail',
      txt : 'primosports@hotmail.com',
    },
    {
      id:5,
      tit : '팩스',
      txt : '02-483-0272',
    }
  ]

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
            {addressTex.map((address) => (
              <p key={address.id}>
                <strong>{address.tit}</strong>
                <span>{address.txt}</span>
              </p>
            ))}
            {/* <p>
              <strong>주소</strong>
              <span>서울특별시 강동구 양재대로 85길 30 이성빌딩 303호</span>
            </p>
            <p>
              <strong>우편번호</strong>
              <span>05405</span>
            </p>
            <p>
              <strong>전화</strong>
              <span>02-474-0697~8</span>
            </p>
            <p>
              <strong>E-mail</strong>
              <span>primosports@hotmail.com</span>
            </p>
            <p>
              <strong>팩스</strong>
              <span>02-483-0272</span>
            </p> */}
          </address>

          <CopyRight>
            <p>&copy; 2025. Primo Sports. All rights reserved. <br />
            * 본 사이트는 개인 포트폴리오 프로젝트로 상업적 목적이 아닌 학습 목적으로 제작되었습니다.</p>
          </CopyRight>

        </FooterInfo>
      </FooterWrap>
    </FooterWrapper>
  );
}