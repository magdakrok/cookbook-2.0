import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 50px;
  width: 50px;

  top: 5%;
  right: 1%;
  position: absolute;

  div {
    height: 2px;
    width: 40px;
    background-color: ${({ theme }) => theme.colors.brown};

    :first-child {
      transform: rotate(45deg);
    }

    :last-child {
      transform-origin: 46%;
      transform: rotate(-45deg);
    }
  }
`;
