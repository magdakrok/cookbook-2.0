import React from 'react';
import { StyledList} from './RecipeList.styles'; 
import RecipeItem from 'components/molecules/RecipeItem/RecipeItem';

const RecipeList = () => {
    return (
       <>
       <StyledList>
        <RecipeItem></RecipeItem>
        <RecipeItem></RecipeItem>
        <RecipeItem></RecipeItem>

       </StyledList>
       </>
    );
};

export default RecipeList;