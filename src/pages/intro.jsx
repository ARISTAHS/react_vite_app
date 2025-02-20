import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import introImg from "/assets/intro.jpg";

const IntroWrap = styled.div`
  height: 100vh;

  .intro_inner{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    padding: 16px;

    @media(max-width:800px){
      justify-content: center;
    }

    .intro_tit{
      font-size: 10vw;
      text-transform: uppercase;
      line-height: 1;
      font-weight: 700;
      white-space: nowrap;
      text-indent: -0.5vw;
      letter-spacing: -0.3vw;

      @media(max-width:420px){
        display: none;
      }
    }
    .intro_text{
      width: 100%;
      height: 40vh;
      background-color: #000;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      .text_box{
        font-size: 3vw;
        line-height: 1;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: underline;
        text-align: center;
        position: relative;
        z-index: 100;
        transition: all 0.3s;
        cursor: all-scroll;
        background: rgba(0, 0, 0, 0.5);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        
        @media(max-width:800px){
          font-size: 24px;
        }
      }
      .img_box{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 30vh;
        height: 30vh;
        border-radius:50%;
        overflow: hidden;
        filter: grayscale(100%);
        transition: all 0.3s;

        @media (max-width: 320px){ 
          width: 20vh;
          height: 20vh;
        }
        img{
          width: 100%;
        }
      }
      &:hover .text_box{
        opacity: 0;
      }
      &:hover .img_box{
        filter: grayscale(0);
      }
    }

    .intro_lines{
      width: 100%;

      .line{
        display: block;
        width: 100%;
        height: 1px;
        background-color: #000;
        margin-bottom: 0.5vw;
        &:nth-child(1){
            height: 1px;
        }
        &:nth-child(2){
            height: 2px;
        }
        &:nth-child(3){
            height: 5px;
        }
        &:nth-child(4){
            height: 9px;
        }
        &:nth-child(5){
            height: 13px;
        }
        &:nth-child(6){
            height: 17px;
        }
        &:nth-child(7){
            height: 25px;
        }
      }
      /* &.bottom{
        .line {
          margin-top: 0.5vw;
          margin-bottom: 0;
          display: none;

          @media (max-width: 800px){ 
              display: block;
          }

          &:nth-child(1){
              height: 25px;
          }
          &:nth-child(2){
              height: 17px;
          }
          &:nth-child(3){
              height: 13px;
          }
          &:nth-child(4){
              height: 9px;
          }
          &:nth-child(5){
              height: 5px;
          }
          &:nth-child(6){
              height: 2px;
          }
          &:nth-child(7){
              height: 1px;
          }
        }
      } */
    }
  }
`;


const IntroText = {
  title: 'port developer',
  desc : ["Talent is", "found at the end of the", "effort."]
}

export default function Intro(){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 0.5초 후에 타이틀이 나타나도록 설정
  }, []);

  return(
    <IntroWrap>
      <div className="intro_inner">
        <h2 className="intro_tit" style={{ opacity: isVisible ? 1 : 0 }}>{IntroText.title}</h2>
        
        <div className="intro_lines">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className="intro_text">
          <div className="text_box">
            <p>{IntroText.desc[0]}</p>
            <p>{IntroText.desc[1]}</p>
            <p>{IntroText.desc[2]}</p>
          </div>
          <div className="img_box">
            <img src={introImg} alt="인트로사진" />
          </div>
        </div>

        {/* <div className="intro_lines bottom">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div> */}
      </div>
    </IntroWrap>
  );
}
