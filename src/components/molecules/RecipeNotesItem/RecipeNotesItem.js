import React from 'react';
import PropTypes from 'prop-types';

const RecipeNotesItem = ({ notes }) => {
  console.log(notes);

  return (
    <div>
      <p>{notes}</p>
    </div>
  );
};

RecipeNotesItem.propTypes = {};

export default RecipeNotesItem;
