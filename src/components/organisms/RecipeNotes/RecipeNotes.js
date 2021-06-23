import React from 'react';
import { Wrapper, RecipeNotesWrapper } from './RecipeNotes.styles';
import AddRecipeNotes from 'components/organisms/AddRecipeNotes/AddRecipeNotes';
import PropTypes from 'prop-types';


const RecipeNotes = ({ notes, id }) => {
   console.log(notes)
  return (
    <Wrapper>
      <RecipeNotesWrapper>
       {notes ?  Object.keys(notes).map((key) => {
          return [...Array(notes[key])].map((notes) => {
            return <p key={notes}>{notes.notes}</p> 
        })}) : <p>Brak notatek</p>}
      
      </RecipeNotesWrapper>
      <AddRecipeNotes id={id}></AddRecipeNotes>
    </Wrapper>
  );
};

RecipeNotes.propTypes = {
  notes: PropTypes.object,
  id: PropTypes.string.isRequired
};


export default RecipeNotes;
