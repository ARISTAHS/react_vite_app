import { useState,useEffect } from "react";
import styled from "styled-components";
import Img_1 from '/assets/mainvisual_1.jpg';
import Img_2 from '/assets/mainvisual_2.jpg';
// import Pagination from "./pagination";

//이미지 배열 생성
const Imges = [Img_1, Img_2];


const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.isActive ? 1 : 0)}; //투명도 1 혹은 0
  z-index: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity .5s ease-in-out; /* 페이드 효과를 위한 전환 시간 */
`;

export default function MainSlide(){

  //이미지 인덱스값 변경
  const [imgIndex, setImgIndex] = useState(0);
  // const handleSlideChange = (newIndex) => {
  //   setImgIndex(newIndex);
  // };


  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) =>
        prev === Imges.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval); //메모리 누수 해결
  }, []);


  return(
    <>
      {Imges.map((image, index) => (
        <SlideImage
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          isActive={index === imgIndex} // 현재 활성 상태 여부 전달
        />
      ))}

      {/* Pagination */}
      {/* <Pagination
        totalSlides={Imges.length}
        currentSlide={imgIndex}
        nChangeSlide={handleSlideChange}
        intervalTime={3000}
        autoPlay={true}
      /> */}
    </>
  );
}