import React from 'react';
import {Button} from './RemoveNoteButton.styles'
import { ReactComponent as RemoveButton } from 'assets/icons/remove.svg';

const RemoveNoteButton = (props) => {
  return (
    <Button {...props}>
      <RemoveButton />
    </Button>
  );
};

export default RemoveNoteButton;
