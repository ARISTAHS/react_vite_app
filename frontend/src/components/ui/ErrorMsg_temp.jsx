import styled from "styled-components";
import PropTypes from "prop-types"; //propsType 에러 해결

const ErrorTxt = styled.p`
  color: red;
  font-size: 14px;
  margin: 20px auto 0;
`;

export default function ErrorMsg({message}){
  return(
    <ErrorTxt className="errerTxt">
      {message}
    </ErrorTxt>
  );
}

ErrorMsg.propTypes = {
  // message가 string 타입이고 필수 값임을 정의
  message: PropTypes.string.isRequired 
};