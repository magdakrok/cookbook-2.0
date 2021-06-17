import styled from 'styled-components';

export const NotesButton = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 50px;
  border: none;
  background-color: ${({ isDelete, theme: { colors } }) =>
    isDelete ? colors.red : colors.green};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  margin-left: 1rem;
  :hover {
    cursor: pointer;
  }
`;
