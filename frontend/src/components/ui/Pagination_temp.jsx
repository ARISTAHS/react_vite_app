import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// 스타일 정의
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 3;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  background: #fff;
  padding: 10px 15px;

  .page-number {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .progress-bar {
    position: relative;
    width: 150px;
    height: 5px;
    background-color: #ddd;
    border-radius: 3px;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: ${(props) => props.$progress}%;
      height: 100%;
      background-color: #20c997;
      transition: width 0.3s ease-in-out;
    }
  }

  .pause-button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
    background: none;
    border: none;
    outline: none;

    &:hover {
      color: #20c997;
    }
  }
`;

export default function Pagination({
  totalSlides,
  currentSlide,
  autoPlay = true,
  intervalTime = 3000,
  onChangeSlide,
}) {


  const [isPaused, setIsPaused] = useState(!autoPlay);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      onChangeSlide((prev) => 
        prev === totalSlides - 1 ? 0 : prev + 1
      );
    }, intervalTime);

    return () => clearInterval(interval); // 메모리 누수 방지
    
  }, [isPaused, intervalTime, totalSlides, onChangeSlide]);

  const togglePause = () => setIsPaused((prev) => !prev);

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <PaginationWrapper $progress={progress}>
      <span className="page-number">{currentSlide + 1}</span>
      <div className="progress-bar" />
      <button className="pause-button" onClick={togglePause}>
        {isPaused ? "▶" : "II"}
      </button>
    </PaginationWrapper>
  );
}

Pagination.propTypes = {
  totalSlides: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  autoPlay: PropTypes.bool,
  intervalTime: PropTypes.number,
  onChangeSlide: PropTypes.func.isRequired,
};