import React, { useContext } from 'react';
import RecipeContext from 'providers/RecipeProvider';
import RecipeList from 'components/organisms/RecipeList/RecipeList';

const DashBoard = () => {
    const {recipes} = useContext(RecipeContext);
    return (
        <RecipeList recipes={recipes}/>
    );
};

export default DashBoard;