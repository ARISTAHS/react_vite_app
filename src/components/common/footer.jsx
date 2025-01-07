import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  background-color: #111;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

const FooterWrap = styled.div`

`;

const FooterLogo = styled.div`

`;

const FooterInfo = styled.div`

`;


export default function Footer(){
  return(
    <FooterWrapper>
      <FooterWrap>
        <FooterLogo>
          <img src="" alt="" />
        </FooterLogo>
        <FooterInfo>
          <ul>
            <li>
              <Link to='/'></Link>
            </li>
            <li>
              <Link to='/'></Link>
            </li>
          </ul>
          <address>
            <p></p>
            <p></p>
            <p></p>
          </address>

        </FooterInfo>
      </FooterWrap>
    </FooterWrapper>
  );
}