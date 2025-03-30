import styled from "styled-components";
import { useEffect, useState } from "react";

const TopBtn = styled.button`
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  
  font-size: 14px;
  border-radius: 50%;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  z-index: 1000;
`;

export default function TopButton(){

  const [moveTop, setMoveTop] = useState(false);

  //스크롤 감지 
  const toggleWindow = () => {
    if(window.scrollY > 300){
      setMoveTop(true);
    }else{
      setMoveTop(false);
    }
  }

  const moveTopBtn = () =>{
    window.scrollTo({
      top: 0,
      behavior : 'smooth'
    })
  };

  useEffect(()=>{
    window.addEventListener("scroll", toggleWindow);
    return() => window.removeEventListener("scroll", toggleWindow);
  }, []);

  return(
    moveTop &&(
      <TopBtn type="button" onClick={moveTopBtn}>
        ▲TOP
      </TopBtn>
    )
  );
}