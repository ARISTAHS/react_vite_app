import styled from "styled-components";
import PropTypes from 'prop-types';

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  transform: scale(${props => props.$isOpen ? 1 : 0.5});
  transition: transform 0.3s ease-in-out;
`;


export default function ModalImages({isOpen, image, onClose}){
  if(!image) return null;

  return(
    <ModalBox $isOpen={isOpen} onClick={onClose}>
      <ModalImage 
        src={image}
        $isOpen={isOpen}
        alt="확대 된 이미지"
        onClick={ e=> e.stopPropagation()} 
      />
    </ModalBox>
  );
}

ModalImages.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.string,
  onClose: PropTypes.func.isRequired
};