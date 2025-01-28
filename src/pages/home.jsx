import styled from "styled-components";
// import mainImg from '../assets/mainvisual.jpg';
import Slider from '../components/ui/mainSlide';
import { Link } from "react-router-dom";
import { useState } from "react";

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
  
  .product_content{

    .sec_top{
      display: flex;
      align-items: center;
      gap: 1.875rem;

      h2{
        font-weight: 700;
        font-size: 3.75rem;
        color: #000;
      }
      p{
        font-size: 1.125rem;
        line-height: 1.25;
        strong{
          color: red;
          font-size: 1.8rem;
          font-weight: 600;
        }
      }
    }
  }
  
  .tab_wrap{
    margin-top: 3.125rem;
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;

    .tab_left{
      width: 18.75rem;
      padding: 3.125rem 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.25rem;
      ul{
        overflow: hidden;
        border-radius: 3.75rem 0 3.75rem 0;
      }
      a{

      }
    }
    .tab_right{

    }
  }

`;

const MenuButton = styled.button`
  width: 100%;
  height: 8.75rem;
  padding: 2.5rem;
  transition: all 0.3s;
  font-weight: 700;
  font-size: 1.125rem;
  text-align: center;
  transition: all 0.3s;
  
  //props 로 css 관리
  border: 2px solid ${props => props.$active ? "#41b79b" : "#f2f2f2"};
  background-color: ${props => props.$active ? "#41b79b" : "#f2f2f2"};
  color: ${props => props.$active ? "white" : "black"};
`;



export default function Home(){

  const menu = ['Foil', 'Epee', 'Sabre'];
  const [activeButton, setActiveButton] = useState(menu[0]);


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

          <div className="tab_wrap">
            <div className="tab_left">
              <ul>
                {menu.map((button) => (
                  <li key={button}>
                    <MenuButton
                      $active={activeButton === button}
                      onClick={()=> setActiveButton(button)}
                      type="button"
                    >
                      {button}
                    </MenuButton>
                  </li>
                ))}
              </ul>
              <Link to='../pages/product.jsx'>More View</Link>
            </div>

            <div className="tab_right">
              <div className="inner">
                <div className="img_box">
                  <img src="../assets/epee_1.jpg" alt=".." />
                </div>
                <div className="txt_box">
                  <Link to='../pages/product.jsx'>More View</Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Content_1>
    </>
  );
}