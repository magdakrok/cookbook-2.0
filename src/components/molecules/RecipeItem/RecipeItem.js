import React, { useContext } from 'react';
import {
  Title,
  Image,
  Wrapper,
  ButtonsWrapper,
  UrlWrapper,
} from './RecipeItem.styles';
import { Button } from 'components/atoms/Button/Button';
import FavoriteButton from 'components/atoms/FavoriteButton/FavoriteButton';
import Photo from 'assets/photos/cooking.jpg';
import { RecipesContext } from 'providers/RecipeProvider';
import PropTypes from 'prop-types';
import { RecipeShape } from 'types/index';

const RecipeItem = ({
  id,
  recipe: { title, http, photo, favorite },
  props,
}) => {
  const { updateFavoriteRecipe, deleteRecipe } = useContext(RecipesContext);

  return (
    <Wrapper {...props}>
      <Title>{title}</Title>
      <UrlWrapper>
        <a href={http}>
          <Image src={photo ? photo : Photo}></Image>
        </a>
      </UrlWrapper>

      <ButtonsWrapper>
        <Button>
          <p>Notatki</p>
        </Button>
        <FavoriteButton
          isFavorite={favorite}
          onClick={() => updateFavoriteRecipe(id, favorite)}
        ></FavoriteButton>
        <Button isDelete onClick={() => deleteRecipe(id)}>
          <p>Usuń</p>
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.shape(RecipeShape),
};

export default RecipeItem;
