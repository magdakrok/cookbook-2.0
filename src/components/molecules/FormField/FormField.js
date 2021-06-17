import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from '../../atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ onChange, value, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Input
        name="name"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default FormField;
