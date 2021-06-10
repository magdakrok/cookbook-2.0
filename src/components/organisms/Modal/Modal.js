import react from 'react';
import PropTypes from 'prop-types';
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

Modal.PropTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
