import React, { useContext } from 'react';
import { RecipesContext } from 'providers/RecipeProvider';
import RecipeList from 'components/organisms/RecipeList/RecipeList';
import { Wrapper } from './Dashboard.styles';

const DashBoard = () => {
  const { recipes } = useContext(RecipesContext);

  return (
  <Wrapper>
    <RecipeList recipes={recipes} />;
  </Wrapper>
  )
  
};

export default DashBoard;
