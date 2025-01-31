import styled from "styled-components";
import { Link } from "react-router-dom";

const MoreView = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.25rem;
  height: 4.375rem;
  border-radius: 2.5rem;
  border: 0.1875rem solid #ddd;
  color: rgba(51,51,51,0.8);
  font-weight: 600;
  transition: all 0.5s ease-in-out;
  &:hover{
    color: #41b79b;
    border: 0.25rem solid #41b79b;
  }
`;

export default function MoreButton({to = '/pages/product'}){
  return(
    <MoreView to={to}>More View</MoreView>
  );
}