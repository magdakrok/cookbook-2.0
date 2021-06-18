import React from 'react';
import { Wrapper, RecipeNotesWrapper } from './RecipeNotes.styles';
import AddRecipeNotes from 'components/organisms/AddRecipeNotes/AddRecipeNotes';
import PropTypes from 'prop-types';


const RecipeNotes = ({ notes, id }) => {
  return (
    <Wrapper>
      <RecipeNotesWrapper></RecipeNotesWrapper>
      <AddRecipeNotes id={id}></AddRecipeNotes>
    </Wrapper>
  );
};

RecipeNotes.propTypes = {
  notes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};


export default RecipeNotes;
