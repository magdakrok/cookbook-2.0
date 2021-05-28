import styled from 'styled-components';

export const Button = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 50px;
  border: none;
  background-color: ${({ isDelete, theme: { colors } }) =>
    isDelete ? colors.red : colors.blue};

  :hover {
    cursor: pointer;
  }
`;
