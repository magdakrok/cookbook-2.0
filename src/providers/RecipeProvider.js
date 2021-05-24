import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const RecipeContext = React.createContext({
    recipes: [],
    // deleteRecipe: () => {}
})

const RecipeProvider = ({children}) => {

    const [recipes, setRecipes] = useState([]);

    async function fetchRecipes() {
       try{
           const content = await axios.get(`https://cookbook-addec.firebaseio.com/cake.json`);
           setRecipes(content.data);
           console.log(content.data);
       } catch(error){
           console.log(error);
       }
    }

    useEffect(()=> {
        fetchRecipes();
    })
    return (
        <RecipeContext.Provider
        value={{
            recipes,
            // deleteRecipe
        }}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeProvider;

