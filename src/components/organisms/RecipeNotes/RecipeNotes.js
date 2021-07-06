import React, { useContext } from 'react';
import { Wrapper, ListWrapper} from './RecipeNotes.styles';

import AddRecipeNotes from 'components/organisms/AddRecipeNotes/AddRecipeNotes';
import PropTypes from 'prop-types';
import RecipeNotesItem from 'components/molecules/RecipeNotesItem/RecipeNotesItem';
import { RecipeNotesContext } from 'providers/RecipeNotesProvider/RecipeNotesProvider';

const RecipeNotes = () => {
  const { notes, id } = useContext(RecipeNotesContext);

  return (
    <Wrapper>
      <ListWrapper>
        {notes ? (
          Object.keys(notes).map((key) => {
            return [...Array(notes[key])].map((notes) => {
              return (
                <RecipeNotesItem
                  key={id}
                  id={key}
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
