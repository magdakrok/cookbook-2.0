import React from 'react';
import { Wrapper, RecipeNotesWrapper } from './RecipeNotes.styles';
import AddRecipeNotes from 'components/organisms/AddRecipeNotes/AddRecipeNotes';

const RecipeNotes = ({ notes, id }) => {
  return (
    <Wrapper>
      <RecipeNotesWrapper></RecipeNotesWrapper>
      <AddRecipeNotes id={id}></AddRecipeNotes>
    </Wrapper>
  );
};

export default RecipeNotes;
