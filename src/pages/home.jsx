import styled from "styled-components";
import mainImg from '../assets/mainvisual.jpg';

const MainVisual = styled.div`
  max-width: 1920px;
  height: 1000px;
  img{
    width: 100%;
  }
`;



export default function Home(){
  return(
    <MainVisual>
      <img src={mainImg} alt="메인이미지" />
    </MainVisual>
  );
}