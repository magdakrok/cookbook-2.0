import styled from 'styled-components';
import ReactModal from 'react-modal';
import {device} from 'assets/styles/theme';


export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 10%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-10%, -10%);
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightBeige};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  padding: 2rem;

  @media ${device.tablet}{
    top: 50%;
  left: 50%;

  width: 70%;
  height: 70%;
  transform: translate(-50%, -50%);
  }
`;
