import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  width: 50px;
  height: 50px;
  margin-bottom: 0;

  :focus {
    cursor: pointer;
  }
`;
