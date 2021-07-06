import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper } from './RecipeNotesItem.styles';
import RemoveNoteButton from 'components/atoms/RemoveNoteButton/RemoveNoteButton';

const RecipeNotesItem = ({ notes }) => {
 

  return (
    <Wrapper>
      <p>{notes}</p>
     <RemoveNoteButton />
      
    </Wrapper>
  );
};

RecipeNotesItem.propTypes = {
  notes: PropTypes.object
};

export default RecipeNotesItem;
