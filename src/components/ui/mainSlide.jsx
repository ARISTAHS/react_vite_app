import { useState,useEffect } from "react";
import styled from "styled-components";
import Img_1 from '../../assets/mainvisual_1.jpg';
import Img_2 from '../../assets/mainvisual_2.jpg';

//이미지 배열 생성
const Imges = [Img_1, Img_2];

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease-in-out;
`;

export default function MainSlide(){

  //이미지 인덱스값 변경
  const [imgIndex, setImgIndex] = useState(0);

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
          style={{
            display: index === imgIndex ? "block" : "none",
          }}
        />
      ))}
    </>
  );
}