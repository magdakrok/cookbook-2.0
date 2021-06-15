import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background-color: ${({theme}) => theme.colors.lightBeige};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0,0,0, 0.3);
  padding: 2rem;
`;