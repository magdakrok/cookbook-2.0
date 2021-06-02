import React from 'react';
import { StyledList } from './RecipeList.styles';
import RecipeItem from 'components/molecules/RecipeItem/RecipeItem';

const RecipeList = ({ recipes }) => {
  return (
    <>
      <StyledList>
        {Object.keys(recipes).map((key) => {
          return [...Array(recipes[key])].map((recipe) => {
            return <RecipeItem key={recipe} id={key} recipe={recipe} />;
          });
        })}
      </StyledList>
    </>
  );
};

export default RecipeList;
