import styled from 'styled-components';
import {device} from 'assets/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet}{
    flex-direction: row;
  }
  
`;

export const RecipeNotesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;
