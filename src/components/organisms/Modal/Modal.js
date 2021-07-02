import { ModalWrapper } from './Modal.styles';
import CloseButton from 'components/atoms/CloseButton/CloseButton';

const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <CloseButton onClick={handleClose}>Close</CloseButton>
    </ModalWrapper>
  );
};

export default Modal;
