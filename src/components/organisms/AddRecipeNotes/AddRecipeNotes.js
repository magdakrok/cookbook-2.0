import React, { useContext, useState } from 'react';
import { Wrapper } from './AddRecipeNotes.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Title } from 'components/atoms/Title/Title';
import { NotesButton } from 'components/atoms/NotesButton/NotesButton';
import { RecipesContext } from 'providers/RecipeProvider';

const AddRecipeNotes = ({ id }) => {
  const key = id;

  const [notesValues, setNotesValues] = useState('');
  const { handleAddRecipeNotes } = useContext(RecipesContext);

  const handleInputChange = (e) => {
    setNotesValues(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmitRecipeNotes = (e) => {
    e.preventDefault();
    handleAddRecipeNotes(notesValues, key);
    console.log(notesValues);
    setNotesValues('');
  };
  return (
    <Wrapper as="form" onSubmit={handleSubmitRecipeNotes}>
      <Title>Dodaj notatkę</Title>
      <FormField
        label=""
        id="notes"
        name="notes"
        value={notesValues}
        onChange={handleInputChange}
      ></FormField>
      <NotesButton type="sumbit">
        <p>Dodaj</p>
      </NotesButton>
    </Wrapper>
  );
};

export default AddRecipeNotes;
