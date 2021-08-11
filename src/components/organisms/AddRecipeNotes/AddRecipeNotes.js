import React, { useContext, useState } from 'react';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Title } from 'components/atoms/Title/Title';
import { NotesButton } from 'components/atoms/NotesButton/NotesButton';
import { ButtonWrapper } from 'components/organisms/AddRecipeNotes/AddRecipeNotes.styles';
import PropTypes from 'prop-types';
import { RecipeNotesContext } from 'providers/RecipeNotesProvider/RecipeNotesProvider';

const AddRecipeNotes = () => {
  const [notesValues, setNotesValues] = useState('');
  const { id, fetchRecipeNotes, handleAddRecipeNotes } = useContext(RecipeNotesContext);
  console.log(`id ${id}`);

  const handleInputChange = (e) => {
    setNotesValues(e.target.value);
  };

  const handleSubmitRecipeNotes = (e) => {
    e.preventDefault();
    handleAddRecipeNotes(notesValues, id);
    console.log(notesValues);
    fetchRecipeNotes();
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
      <ButtonWrapper>
      <NotesButton type="sumbit" >
        <p>Dodaj</p>
      </NotesButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

AddRecipeNotes.propTypes = {
  id: PropTypes.string,
};

export default AddRecipeNotes;
