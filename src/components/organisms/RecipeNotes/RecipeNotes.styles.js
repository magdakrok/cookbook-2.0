import styled from 'styled-components';
import {device} from 'assets/styles/theme';
import { Wrapper as RecipeListWrapper  } from 'components/atoms/Wrapper/Wrapper';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet}{
    flex-direction: row;
  }
  
`;

export const ListWrapper = styled(RecipeListWrapper)`
display: flex;
  align-items: flex-start;
  
`;
