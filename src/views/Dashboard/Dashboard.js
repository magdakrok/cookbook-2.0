import React, { useContext } from 'react';
import { RecipesContext } from 'providers/RecipeProvider';
import RecipeList from 'components/organisms/RecipeList/RecipeList';

const DashBoard = () => {
  const { recipes } = useContext(RecipesContext);

  return <RecipeList recipes={recipes} />;
};

export default DashBoard;
