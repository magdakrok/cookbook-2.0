import React, { useEffect, useContext, useCallback } from 'react';
import { RecipesContext } from 'providers/RecipeProvider';
import RecipeList from 'components/organisms/RecipeList/RecipeList';
import { Wrapper } from './Dashboard.styles';
import { useParams } from 'react-router-dom';

const DashBoard = () => {
  const { recipes } = useContext(RecipesContext);
  const { type } = useParams();
  const { setType } = useContext(RecipesContext);

  useEffect(() => {
    setType(type)
  }, [type]);

 
 
  return (
    <Wrapper>
      <RecipeList recipes={recipes} />;
    </Wrapper>
  );
};

export default DashBoard;
