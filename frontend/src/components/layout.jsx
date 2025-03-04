import Header from './common/Header';
import Footer from './common/Footer';
import styled from "styled-components";
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Main = styled.main`
  margin-top: 100px;
`;

export default function Layout(){
  
  return(
    <Wrapper>
      <Header/>
      <Main>
        <Outlet /> {/* 하위 페이지가 여기 렌더링됨 */}
      </Main>
      <Footer />
    </Wrapper>
  )
}