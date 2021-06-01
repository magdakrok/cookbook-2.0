import React from 'react';
import { bool } from 'prop-types';
import { StyledLink, StyledNav } from './Navigation.styles';

const Navigation = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledNav isHidden={isHidden} onClick={() => setOpen(!open)} {...props}>
    <StyledLink to="/przepisy/ciasta">Ciasta</StyledLink>
    <StyledLink to="/przepisy/sałatki">Sałatki</StyledLink>
    <StyledLink to="/przepisy/daniagłowne">Dania Główne</StyledLink>
    <StyledLink to="/dodajprzepis">Dodaj przepis</StyledLink>
    </StyledNav>
  );
};

Navigation.propTypes = {
  open: bool.isRequired,
};

export default Navigation;
