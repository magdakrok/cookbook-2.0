import styled from 'styled-components';
import { device } from 'assets/styles/theme';
export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;

  @media ${device.laptop} {
    margin: 0 3rem 5rem 3rem;
  }
`;
