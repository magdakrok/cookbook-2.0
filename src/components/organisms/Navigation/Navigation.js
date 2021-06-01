import React from 'react';
import { bool } from 'prop-types';
import { StyledNav } from './Navigation.styles';

const Navigation = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledNav isHidden={isHidden} onClick={() => setOpen(!open)} {...props}>
      <a href="">Ciasta</a>
      <a href="">Sałatki</a>
      <a href="">Dania Główne</a>
      <a href="">Dodaj przepis</a>
    </StyledNav>
  );
};

Navigation.propTypes = {
  open: bool.isRequired,
};

export default Navigation;
