import { useState, useEffect } from "react";
import styled from "styled-components";

// 스타일 정의
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 3;

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
      width: ${(props) => props.progress}%;
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
  totalSlides, // 총 슬라이드 수
  currentSlide, // 현재 슬라이드 인덱스
  autoPlay = true, // 자동 재생 여부
  intervalTime = 3000, // 자동 재생 간격 (ms)
  onChangeSlide, // 슬라이드 변경 시 호출되는 콜백
}) {
  const [isPaused, setIsPaused] = useState(!autoPlay);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      onChangeSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, intervalTime);

    return () => clearInterval(interval); // 메모리 누수 방지
  }, [isPaused, intervalTime, totalSlides, onChangeSlide]);

  const togglePause = () => setIsPaused((prev) => !prev);

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <PaginationWrapper progress={progress}>
      <span className="page-number">{currentSlide + 1}</span>
      <div className="progress-bar" />
      <button className="pause-button" onClick={togglePause}>
        {isPaused ? "▶" : "II"}
      </button>
    </PaginationWrapper>
  );
}