import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const RecipesContext = createContext({
  recipes: [],
});

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cookbook-addec.firebaseio.com/cake.json`)
      .then((response) => setRecipes(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
