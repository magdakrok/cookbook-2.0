import React from 'react';
import { Wrapper } from './AddRecipeNotes.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Title } from 'components/atoms/Title/Title';
import { NotesButton } from 'components/atoms/NotesButton/NotesButton';

const AddRecipeNotes = () => {
  return (
    <Wrapper as="form">
      <Title>Dodaj notatkę</Title>
      <FormField label="" id="content" name="content"></FormField>
      <NotesButton>
        <p>Dodaj</p>
      </NotesButton>
    </Wrapper>
  );
};

export default AddRecipeNotes;
