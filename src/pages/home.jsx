import styled from "styled-components";
// import mainImg from '../assets/mainvisual.jpg';
import Slider from '../components/ui/mainSlide';

const MainVisual = styled.div`
  /* max-width: 1920px; */
  height: 1000px;
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
    z-index: 2; /* 텍스트 레이어를 슬라이드 이미지 위로 설정 */

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

  .product_content{
    height: 500px;
    border: 1px solid red;
  }
`;

const Content_1 = styled.div`
  
  

`;


export default function Home(){
  return(
    <>
      <MainVisual className="container">
        <Slider />
        <div className="txt_box">
          <h2 className="box_title">타이틀 위치 확인용</h2>
          <p className="text">텍스트 위치 확인용</p>
        </div>
      </MainVisual>
      <Content_1 className="container">
        <div className="product_content">
          <div className="sec_top">
            <h2>PRODUCT</h2>
            <p>독일 기술로 탄생한 최상의 펜싱 장비 <br />
            <strong>&apos;allstar&apos;</strong>와 함께 당신의 승리를 준비하세요</p>
          </div>
        </div>
      </Content_1>
    </>
  );
}