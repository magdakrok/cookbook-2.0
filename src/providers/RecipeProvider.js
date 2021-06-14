import React, { useState, createContext } from 'react';
import axios from 'helpers/axios';

export const RecipesContext = createContext({
  recipes: [],
  updateFavoriteRecipe: () => {},
  deleteRecipe: () => {},
  setType: () => {},
  fetchRecipe: () => {},
});

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipeType, setRecipeType] = useState('');

  const fetchRecipe = (recipeType) => {
    axios
      .get(`${recipeType}.json`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((err) => console.log(err));
  };

  const setType = (recipeType) => {
    setRecipeType(recipeType);
  };

  const updateFavoriteRecipe = (key, favorite) => {
    (async () => {
      setIsFavorite(true);
      console.log(key);
      await axios
        .patch(`${recipeType}/${key}.json`, {
          favorite: !favorite,
        })
        .then((res) => {
          console.log(res);
          setIsFavorite(false);
          fetchRecipe(recipeType);
        })
        .catch((e) => {
          alert('error');
          setIsFavorite(false);
        });
    })();
  };

  const deleteRecipe = (key) => {
    axios
      .delete(`${recipeType}/${key}.json`)
      .then((res) => {
        fetchRecipe(recipeType);
      })
      .catch((e) => {
        alert('error');
      });
  };
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setType,
        updateFavoriteRecipe,
        deleteRecipe,
        fetchRecipe,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
