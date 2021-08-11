import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {Wrapper } from './RecipeNotesItem.styles';
import RemoveNoteButton from 'components/atoms/RemoveNoteButton/RemoveNoteButton';
import { RecipeNotesContext } from 'providers/RecipeNotesProvider/RecipeNotesProvider';

const RecipeNotesItem = ({ id, notes }) => {
 
  console.log(id, notes)
  const {handleRemoveRecipeNote} = useContext(RecipeNotesContext)

  return (
    <Wrapper>
      <p>{notes}</p>
     <RemoveNoteButton 
    onClick = {() => handleRemoveRecipeNote(id)}
    />
      
    </Wrapper>
  );
};

RecipeNotesItem.propTypes = {
  
  notes: PropTypes.object
};

export default RecipeNotesItem;
