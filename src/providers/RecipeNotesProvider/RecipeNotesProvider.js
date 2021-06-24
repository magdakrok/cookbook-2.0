import React, { useState, createContext } from 'react';

export const RecipeNotesContext = createContext({
  notes: [],
  key: '',
  setRecipeNotes: () => {}
});

const RecipeNotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [key, setKey] = useState('');

  const setRecipeNotes = (notes) =>{
     setNotes(notes)
     
  }


  return (
    <RecipeNotesContext.Provider
      value={{
        notes,
        key,
        setRecipeNotes
      }}
    >
      {children}
    </RecipeNotesContext.Provider>
  );
};

export default RecipeNotesProvider;
