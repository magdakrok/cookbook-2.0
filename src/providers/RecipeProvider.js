import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const RecipesContext = createContext({
  recipes: [],
  updateFavoriteRecipe: () => {},
  deleteRecipe: () => {},
});

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetchRecipe();
  }, [isFavorite]);

  const fetchRecipe = () => {
    axios
      .get(`https://cookbook-addec.firebaseio.com/cake.json`)
      .then((response) => setRecipes(response.data))

      .catch((err) => console.log(err));
  };

  const updateFavoriteRecipe = (key, favorite) => {
    (async () => {
      setIsFavorite(true);

      await axios
        .patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
          favorite: !favorite,
        })
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
      .delete(`https://cookbook-addec.firebaseio.com/cake/${key}.json`)
      .then((res) => {
        fetchRecipe();
      })
      .catch((e) => {
        alert('error');
      });
  };
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        updateFavoriteRecipe,
        deleteRecipe,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
