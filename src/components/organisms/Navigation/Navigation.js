import React from 'react';
import { bool } from 'prop-types';
import { StyledLink, StyledNav } from './Navigation.styles';

const Navigation = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledNav isHidden={isHidden} onClick={() => setOpen(!open)} {...props}>
      <StyledLink to="/recipes/cake">Ciasta</StyledLink>
      <StyledLink to="/recipes/salad">Sałatki</StyledLink>
      <StyledLink to="/recipes/dinner">Dania Główne</StyledLink>
      <StyledLink to="/dodajprzepis">Dodaj przepis</StyledLink>
    </StyledNav>
  );
};

Navigation.propTypes = {
  open: bool.isRequired,
};

export default Navigation;
