import React from 'react';
import { Title, Image, Wrapper, ButtonsWrapper } from './RecipeItem.styles';
import { Button } from 'components/atoms/Button/Button';
import FavoriteButton from 'components/atoms/FavoriteButton/FavoriteButton';
import Photo from 'assets/photos/cooking.jpg';

const RecipeItem = ({ recipe: { title, photo, favorite } }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Image src={photo ? photo : Photo}></Image>

      <ButtonsWrapper>
        <Button>
          <p>Notatki</p>
        </Button>
        <FavoriteButton isFavorite={favorite}></FavoriteButton>
        <Button isDelete>
          <p>Usuń</p>
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default RecipeItem;
