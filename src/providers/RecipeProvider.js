import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const RecipesContext = createContext({
  recipes: [],
  updateFavoriteRecipe: () => {},
  deleteRecipe: () => {},
  setType: () => {},
});

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipeType, setRecipeType] = useState('');

  useEffect(() => {
    fetchRecipe(recipeType);
  }, [isFavorite, recipeType]);

  const fetchRecipe = (recipeType) => {
    axios
      .get(`https://cookbook-addec.firebaseio.com/${recipeType}.json`)
      .then((response) => setRecipes(response.data))
      .catch((err) => console.log(err));
  };

  const setType = (recipeType) => {
    setRecipeType(recipeType);
  };
  const updateFavoriteRecipe = (key, favorite) => {
    (async () => {
      setIsFavorite(true);

      await axios
        .patch(
          `https://cookbook-addec.firebaseio.com/${recipeType}/${key}.json`,
          {
            favorite: !favorite,
          }
        )
        .then((res) => {
          console.log(res);
          setIsFavorite(false);
        })
        .catch((e) => {
          alert('error');
          setIsFavorite(false);
        });
    })();
  };

  const deleteRecipe = (key) => {
    axios
      .delete(`https://cookbook-addec.firebaseio.com/${recipeType}/${key}.json`)
      .then((res) => {
        // fetchRecipe();
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
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
