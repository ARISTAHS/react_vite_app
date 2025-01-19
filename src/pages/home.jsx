import styled from "styled-components";
// import mainImg from '../assets/mainvisual.jpg';
import Slider from '../components/ui/mainSlide';

const MainVisual = styled.div`
  max-width: 1920px;
  height: 1000px;
  margin:  0 auto;
  overflow: hidden;
  position: relative;

  .txt_box{
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
    line-height: 1.4;
    color: #fff;
    padding: 0 10rem;

    .box_title{
      font-size: 3.125rem;
      font-weight: 600;
      
    }
    .text{
      font-weight: 400;
      font-size: 1.5rem;
      margin-top: 1.2rem;
    }
  }
`;


export default function Home(){
  return(
    <MainVisual>
      <Slider />
      <div className="txt_box">
        <h2 className="box_title">타이틀 위치 확인용</h2>
        <p className="text">텍스트 위치 확인용</p>
      </div>
    </MainVisual>
  );
}