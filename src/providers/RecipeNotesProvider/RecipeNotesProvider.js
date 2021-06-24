import React, { useState, createContext } from 'react';
import axios from 'helpers/axios';

export const RecipeNotesContext = createContext({
    notes: [],
    key: '',
});

const RecipeNotesProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [key, setKey] = useState('');

    return(
        <RecipeNotesContext.Provider
        value={{
            notes,
            key
        }}
        >
            {children}
        </RecipeNotesContext.Provider>
    );
};

export default RecipeNotesProvider;