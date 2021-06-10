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
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'components/organisms/Modal/useModal';
import RecipeNotes from 'components/molecules/RecipeNotes/RecipeNotes';

const RecipeItem = ({
  id,
  recipe: { title, http, photo, favorite },
  props,
}) => {
  const { updateFavoriteRecipe, deleteRecipe } = useContext(RecipesContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleOpenNotesDetail = async (id) => {
    handleOpenModal();
  };

  return (
    <Wrapper {...props}>
      <Title>{title}</Title>
      <UrlWrapper>
        <a href={http}>
          <Image src={photo ? photo : Photo}></Image>
        </a>
      </UrlWrapper>

      <ButtonsWrapper>
        <Button onClick={handleOpenNotesDetail}>
          <p>Notatki</p>
        </Button>
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <RecipeNotes />
        </Modal>
        <FavoriteButton
          isFavorite={favorite}
          onClick={() => updateFavoriteRecipe(id, favorite)}
          data-testid="favorite button"
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
