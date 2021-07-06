import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {Wrapper } from './RecipeNotesItem.styles';
import RemoveNoteButton from 'components/atoms/RemoveNoteButton/RemoveNoteButton';
import { RecipeNotesContext } from 'providers/RecipeNotesProvider/RecipeNotesProvider';

const RecipeNotesItem = ({ id, notes }) => {
 
  console.log(id, notes)
  const {removeRecipeNote} = useContext(RecipeNotesContext)

  return (
    <Wrapper>
      <p>{notes}</p>
     <RemoveNoteButton 
    onClick = {() => removeRecipeNote(id)}
    />
      
    </Wrapper>
  );
};

RecipeNotesItem.propTypes = {
  id: PropTypes.string,
  notes: PropTypes.object
};

export default RecipeNotesItem;
