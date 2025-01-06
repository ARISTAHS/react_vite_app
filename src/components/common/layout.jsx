import Header from './header';
import Gnb from './gnb';
import Footer from './footer';
import styled from "styled-components";
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default function Layout(){
  return(
    <Wrapper>
      <Header/>
      <Gnb />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </Wrapper>
  )
}