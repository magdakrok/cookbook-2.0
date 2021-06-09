import React, { useEffect, useContext } from 'react';
import { RecipesContext } from 'providers/RecipeProvider';
import RecipeList from 'components/organisms/RecipeList/RecipeList';
import { Wrapper } from './Dashboard.styles';
import { useParams } from 'react-router-dom';

const DashBoard = () => {
  const { recipes } = useContext(RecipesContext);
  let { type } = useParams();
  const { setType } = useContext(RecipesContext);

  if(type === undefined) type = 'cake';

  useEffect(() => {
    setType(type);
  }, [setType, type]);

  return (
    <Wrapper>
      <RecipeList recipes={recipes} />
    </Wrapper>
  );
};

export default DashBoard;
