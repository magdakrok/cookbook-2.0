import React from 'react';
import {Wrapper, RecipeNotesWrapper} from './RecipeNotes.styles';
import AddRecipeNotes from 'components/organisms/AddRecipeNotes/AddRecipeNotes';

const RecipeNotes = ({notes}) => {
    return (
        <Wrapper>
            <RecipeNotesWrapper>
            {notes.notesItem.content}
            </RecipeNotesWrapper>
            <AddRecipeNotes>

            </AddRecipeNotes>
        </Wrapper>
    );
};

export default RecipeNotes;