import React from 'react';

const RecipeNotes = ({notes}) => {
    return (
        <div>
            {notes.notesItem.content}
        </div>
    );
};

export default RecipeNotes;