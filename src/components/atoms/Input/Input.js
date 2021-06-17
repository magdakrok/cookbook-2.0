import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px 8px;
  margin-left: 1rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightSalmon};
  box-sizing: border-box;

  outline: 0;
  &:focus {
    outline: none;
  }
`;
