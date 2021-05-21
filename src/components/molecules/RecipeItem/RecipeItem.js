import React from 'react';
import { Title, Image, Wrapper, ButtonsWrapper } from './RecipeItem.styles';
import { Button } from 'components/atoms/Button/Button';
import FavoriteButton from 'components/atoms/FavoriteButton/FavoriteButton';

const RecipeItem = () => {
  const deleteUser = () => {
    console.log('favorite');
  };

  return (
    <Wrapper>
      <Title>Ciasto Euforia</Title>
      <Image src="#"></Image>
      <ButtonsWrapper>
        <Button>
          <p>Notatki</p>
        </Button>
        <FavoriteButton isFavorite onClick={deleteUser}></FavoriteButton>
        <Button isDelete>
          <p>Usuń</p>
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default RecipeItem;
