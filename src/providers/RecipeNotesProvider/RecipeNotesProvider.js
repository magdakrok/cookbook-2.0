import React, { useState, createContext, useContext } from 'react';
import axios from 'helpers/axios';
import { RecipesContext } from 'providers/RecipeProvider/RecipeProvider';

export const RecipeNotesContext = createContext({
  notes: [],
  id: '',
  setRecipeNotes: () => {},
  setRecipeId: () => {},
  fetchRecipeNotes: () => {},
  removeRecipeNote: () => {}
});

const RecipeNotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState('');
  const {recipeType} = useContext(RecipesContext);
  

  const setRecipeNotes = (notes) => {
    setNotes(notes);
    console.log(`notatki ${notes}`)
  };

  const setRecipeId = (id) => {
    setId(id);
  };

  const fetchRecipeNotes = () => {
    axios
      .get(`${recipeType}/${id}/notes.json`)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((err) => console.log(err));
  
  }

  const removeRecipeNote = (key) => {
    console.log(key)
    console.log(id);
   axios.delete(`${recipeType}/${id}/notes/${key}.json`)
   .then((response) => {
     fetchRecipeNotes();
     console.log(`deleted ${response}`)
   })
   .catch((err ) => console.log(err))
  }

  return (
    <RecipeNotesContext.Provider
      value={{
        notes,
        id,
        setRecipeNotes,
        setRecipeId,
        fetchRecipeNotes,
        removeRecipeNote
      }}
    >
      {children}
    </RecipeNotesContext.Provider>
  );
};

export default RecipeNotesProvider;
