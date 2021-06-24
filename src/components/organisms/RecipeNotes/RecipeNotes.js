import React from 'react';
import { Wrapper, RecipeNotesWrapper } from './RecipeNotes.styles';
import AddRecipeNotes from 'components/organisms/AddRecipeNotes/AddRecipeNotes';
import PropTypes from 'prop-types';
import RecipeNotesItem from 'components/molecules/RecipeNotesItem/RecipeNotesItem';

const RecipeNotes = ({ notes, id }) => {
  console.log(notes);
  return (
    <Wrapper>
      <RecipeNotesWrapper>
        {notes ? (
          Object.keys(notes).map((key) => {
            return [...Array(notes[key])].map((notes) => {
              return (
                <RecipeNotesItem
                  key={notes}
                  notes={notes.notes}
                ></RecipeNotesItem>
              );
            });
          })
        ) : (
          <p>Brak notatek</p>
        )}
      </RecipeNotesWrapper>
      <AddRecipeNotes id={id}></AddRecipeNotes>
    </Wrapper>
  );
};

RecipeNotes.propTypes = {
  notes: PropTypes.object,
  id: PropTypes.string.isRequired,
};

export default RecipeNotes;
