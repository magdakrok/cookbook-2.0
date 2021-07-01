import React, { useContext } from 'react';
import { Wrapper, RecipeNotesWrapper } from './RecipeNotes.styles';
import { Wrapper as ListWrapper } from 'components/atoms/Wrapper/Wrapper';
import AddRecipeNotes from 'components/organisms/AddRecipeNotes/AddRecipeNotes';
import PropTypes from 'prop-types';
import RecipeNotesItem from 'components/molecules/RecipeNotesItem/RecipeNotesItem';
import { RecipeNotesContext } from 'providers/RecipeNotesProvider/RecipeNotesProvider';

const RecipeNotes = ({ id }) => {
  const { notes } = useContext(RecipeNotesContext);

  return (
    <Wrapper>
      <ListWrapper>
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
      </ListWrapper>
      <AddRecipeNotes id={id}></AddRecipeNotes>
    </Wrapper>
  );
};

RecipeNotes.propTypes = {
  notes: PropTypes.object,
  id: PropTypes.string,
};

export default RecipeNotes;
