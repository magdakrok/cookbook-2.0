import { ModalWrapper } from './Modal.styles';

const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <button onClick={handleClose}>Close</button>
    </ModalWrapper>
  );
};

export default Modal;
