import React, { useState } from 'react';
import { Wrapper } from './Navigation.styles';
import Burger from 'components/atoms/Burger/Burger';

const Navigation = () => {

    const [open, setOpen] = useState(false);


    return (
        <Wrapper>

          <Burger open={open} setOpen={setOpen} />
          
        </Wrapper>
    );
};

export default Navigation;