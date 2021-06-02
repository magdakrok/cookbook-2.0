import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.lightBeige};
  position: fixed;
  cursor: pointer;
`;
