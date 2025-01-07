
import Header from './common/header';
import Footer from './common/footer';
import styled from "styled-components";
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  padding: 50px 0;
  width: 100%;
  height: 100%;
  max-width: 860px;
`;
const Main = styled.main`
  flex: 1;
  padding: 20px;
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