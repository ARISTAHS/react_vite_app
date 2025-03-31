import styled from "styled-components";
import Slider from '../components/ui/MainSlide.jsx';
import MoreButton from "../components/ui/Link.jsx";
import ProductList from "../components/ui/ProductData.jsx";
import ModalImages from "../components/ui/Popup.jsx";
import Map from "../components/ui/Map.jsx";
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
`;

const Content_1 = styled.div`
  
  .product_content{
    padding: 0 20px;
    max-width: 1660px;
    margin: 0 auto;

    .sec_top{
      display: flex;
      align-items: center;
      gap: 1.875rem;
      
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
    }
    .tab_right{
      flex: 1;  // 남은 공간 모두 차지
      width: 1300px;
      overflow: hidden;
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

const Content_2 = styled.div`

  .brand_content{
    max-width: 1660px;  // 최대 너비 설정
    margin: 0 auto;     // 중앙 정렬
    padding: 0 20px;    // 좌우 여백

    .content_title{
      display: flex;
      align-items: baseline;
      gap: 1.875rem;
      padding-bottom: 3.5rem;

      p{
        font-size: 1.125rem;
        line-height: 1.5;
      }
    }
    .img_box {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    
      .img_rayout {
        aspect-ratio: 1/1;  // 정사각형 비율로 통일
        
        // 첫 번째 줄 (2개의 큰 이미지)
        &:nth-child(1),
        &:nth-child(2) {
          grid-column: span 2;
          aspect-ratio: 16/9;  // 가로로 긴 직사각형
        }
        
        // 중간 줄 (4개의 작은 이미지)
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6) {
          grid-column: span 1;
        }
        
        // 마지막 줄 (2개의 중간 크기 이미지)
        &:nth-child(7),
        &:nth-child(8) {
          grid-column: span 2;
          aspect-ratio: 3/2;  // 가로로 약간 긴 직사각형
        }

        &:nth-child(9),
        &:nth-child(10){
          grid-column: span 2;
          aspect-ratio: 13/6;
        }

        .img_button{
            width: 100%;
            height: 100%;
            padding: 0;
            border: none;
            background: none;
            cursor: pointer;
            overflow: hidden;  // 이미지 호버 효과를 위해

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
              transition: transform 0.3s ease;
              
              &:hover {
                transform: scale(1.1);
              }
            }
          }
      }
    }

    // 반응형 처리
    @media (max-width: 1200px) {
      .img_box {
        grid-template-columns: repeat(3, 1fr);
        
        .img_rayout {
          &:nth-child(1),
          &:nth-child(2) {
            grid-column: span 3;  // 전체 너비 사용
          }
          
          &:nth-child(7),
          &:nth-child(8) {
            grid-column: span 3;  // 전체 너비 사용
          }
        }
      }
    }

    @media (max-width: 768px) {
      .img_box {
        grid-template-columns: repeat(2, 1fr);
        
        .img_rayout {
          &:nth-child(1),
          &:nth-child(2) {
            grid-column: span 2;
          }
          
          &:nth-child(3),
          &:nth-child(4),
          &:nth-child(5),
          &:nth-child(6) {
            grid-column: span 1;
          }
          
          &:nth-child(7),
          &:nth-child(8) {
            grid-column: span 2;
          }
        }
      }
    }

    @media (max-width: 480px) {
      .img_box {
        grid-template-columns: 1fr;
        
        .img_rayout {
          &:nth-child(n) {  // 모든 아이템
            grid-column: span 1;
            aspect-ratio: 3/2;
          }
        }
      }
    }
  }
`;

const Content_3 = styled.div`
  .map_wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    .top_box{
      display: flex;
      align-items: baseline;
      gap: 1.875rem;
    }
    .bottom_box{
      display: flex;
      align-items: center;
      justify-items: center;
      width: 100%;

      .left{
        width: 55%;
        height: 580px;
      }
      .right{
        margin-left: 5rem;
        width: 45%;
        background-color: #1E2725;

        .right_title{
          margin: 20px 0 2rem 30px;
          p{
            &.tit{
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
            }
            &.txt{
            margin-top: 1rem;
            color: rgba(255,255,255,0.5);
            }
          }
        }
        .list{
          padding: 1rem;

          li{
            background-color: rgba(255,255,255,0.07);
            padding: 2.2rem;

            &:nth-of-type(2),
            &:nth-of-type(3){
              margin-top: 20px;
            }

            p{
              &:nth-child(1){
                font-size: max(1.3rem, 12px);
                font-weight: 700;
                color: #f9f9f9;
                margin-bottom: 20px;
              }
              &:nth-child(2){
                font-size: max(1.1rem, 11px);
                color: rgba(255, 255, 255, 0.3);
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
`;



export default function Home(){

  const menu = ['Foil', 'Epee', 'Sabre'];
  const [activeButton, setActiveButton] = useState(menu[0]);
  const brandImg = [
    {
      id:1,
      image : "/assets/etc1.jpg",
      desc : "만드는 모습 1"
    },
    {
      id:2,
      image : "/assets/etc2.jpg",
      desc : "만드는 모습 2"
    },
    {
      id:3,
      image : "/assets/etc3.jpg",
      desc : "만드는 모습 3"
    },
    {
      id:4,
      image : "/assets/etc4.jpg",
      desc : "만드는 모습 4"
    },
    {
      id:5,
      image : "/assets/etc5.jpg",
      desc : "만드는 모습 5"
    },
    {
      id:6,
      image : "/assets/etc6.jpg",
      desc : "만드는 모습 6"
    },
    {
      id:7,
      image : "/assets/etc7.jpg",
      desc : "만드는 모습 7"
    },
    {
      id:8,
      image : "/assets/etc8.jpg",
      desc : "만드는 모습 8"
    },
    {
      id:9,
      image : "/assets/etc9.jpg",
      desc : "만드는 모습 9"
    },
    {
      id:10,
      image : "/assets/etc10.jpg",
      desc : "만드는 모습 10"
    },

  ];

  const [selectImg , setSelectImg] = useState(null);
  const [modalOpen , setModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectImg(image);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(()=>setSelectImg(null), 300);
  };

  const noticeList = [
    {
      id:1,
      title: '2025년 02월 20일 가격에 대한 공지',
      desc: '최근 원가 상승으로 인하여 부득이 2025년 02월 20일부터 품목 가격을 인상하게 되었습니다.고객 여러분의 넓은 양해를 구하면서 지속적인 애용과 격려를 부탁드립니다.',
    },
    {
      id:2,
      title: 'allstar, uhlmann사의 FIE 마스크 밴드교체',
      desc: '알스타 FIE 마스크 밴드 정품 수리키트 부품을 고객 여러분들의 편의를 위하여 재입고하여 현재 교체가 가능함을 알려드립니다.',
    },
    {
      id:3,
      title: '2025년 마라징 블레이드 예약 판매 공지',
      desc: '알스타 본사의 마라징 블레이드 수급 관련하여 공지드립니다.',
    }
  ];

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
              <MoreButton />
            </div>

            <div className="tab_right">
                <ProductList />
            </div>
          </div>

        </div>
      </Content_1>

      <Content_2 className="container">
        <div className="brand_content">
          <div className="content_title">
            <h2>Brand</h2>
            <p>최고의 펜싱 장비, 이렇게 제작됩니다.</p>
          </div>
          <div className="img_box">
            {brandImg.map((brand) => (
              <div className="img_rayout" key={brand.id}>
                <button type="button" onClick={()=> openModal(brand.image)}
                  className="img_button" aria-label={`${brand.desc} 이미지 크게 보기`}>
                  <img src={brand.image} alt={brand.desc} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <ModalImages isOpen={modalOpen} image={selectImg} onClose={closeModal} />
      </Content_2>

      <Content_3 className="container">
        <div className="map_wrap">

          <div className="top_box">
            <h2>Media</h2>
            <p>위치와 공지사항을 확인해주세요.</p>
          </div>

          <div className="bottom_box">
            <div id="map" className="left">
              <Map/>
            </div>
            
            <div className="right">
              <div className="right_title">
                <p className="tit">공지사항</p>
                <p className="txt">프리모상사의 다양한 소식을 전해드립니다.</p>
              </div>
              <ul className="list">
                {noticeList.map((notice)=>(
                  <li key={notice.id}>
                    <p>{notice.title}</p>
                    <p>{notice.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Content_3>
    </>
  );
}