import React, { useState, createContext } from 'react';

export const RecipeNotesContext = createContext({
  notes: [],
  id: '',
  setRecipeNotes: () => {},
  setRecipeId: () => {},
});

const RecipeNotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState('');

  const setRecipeNotes = (notes) => {
    setNotes(notes);
  };

  const setRecipeId = (id) => {
    setId(id);
  };

  return (
    <RecipeNotesContext.Provider
      value={{
        notes,
        id,
        setRecipeNotes,
        setRecipeId,
      }}
    >
      {children}
    </RecipeNotesContext.Provider>
  );
};

export default RecipeNotesProvider;
