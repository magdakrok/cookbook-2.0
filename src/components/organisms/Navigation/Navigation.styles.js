import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 30%;
  height: 100vh;
  position: fixed;
  right: 0;
  background-color: ${({ theme }) => theme.colors.brown};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${({ isHidden }) =>
    isHidden ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;
