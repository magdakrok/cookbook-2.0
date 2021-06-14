import React from 'react';

const RecipeNotes = ({notes}) => {
    return (
        <div>
            {notes.content}
        </div>
    );
};

export default RecipeNotes;