import styled from "styled-components";
import { useEffect, useState } from "react";

const TopBtn = styled.button`

`;

export default function TopButton(){

  const [moveTop, setMoveTop] = useState(false);

  const handleClick = () =>{
    window.scrollTo({
      top: 0,
      behavior : 'smooth'
    })
  };

  useEffect(()=>{}, []);

  return(
    <TopBtn>
      <button type="button" onClick={handleClick} className="move_btn">▲</button>
    </TopBtn>
  );
}