import React from 'react';
import { StyledList } from './RecipeList.styles';
import RecipeItem from 'components/molecules/RecipeItem/RecipeItem';
import { Title } from 'components/molecules/RecipeItem/RecipeItem.styles';

const RecipeList = ({ recipes }) => {
  return (
    <>
      {recipes ? (
        <StyledList>
          {Object.keys(recipes).map((key) => {
            return [...Array(recipes[key])].map((recipe) => {
              return <RecipeItem key={recipe} id={key} recipe={recipe} />;
            });
          })}
        </StyledList>
      ) : (
        <Title>Brak przepisów do wyświetlenia</Title>
      )}
    </>
  );
};

export default RecipeList;
