import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {device} from 'assets/styles/theme';

export const StyledNav = styled.nav`
  width: 100%;
  height: 100vh;
  position: fixed;
  right: 0;
  background-color: ${({ theme }) => theme.colors.brown};
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  padding-left: 5rem;
  
  transform: ${({ isHidden }) =>
    isHidden ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
 

  @media ${device.tablet}{
    width: 30%;
    padding-top: 10rem;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightSalmon};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 1rem;

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.lightBeige};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.xxl};

    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.lightBeige};
    left: 4rem;
    margin-top: 0.3rem;
  }

  @media ${device.tablet}{
    margin: 2rem;
    
  }
  
`;
