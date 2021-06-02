import React, { useState } from 'react';
import { Wrapper } from './Header.styles';
import Burger from 'components/atoms/Burger/Burger';
import Navigation from 'components/organisms/Navigation/Navigation';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Burger open={open} setOpen={setOpen} />
      <Navigation open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default Header;
