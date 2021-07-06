import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, RemoveIcon} from './RecipeNotesItem.styles';


const RecipeNotesItem = ({ notes }) => {
 

  return (
    <Wrapper>
      <p>{notes}</p>
      <RemoveIcon />
    </Wrapper>
  );
};

RecipeNotesItem.propTypes = {
  notes: PropTypes.object
};

export default RecipeNotesItem;
