import styled from 'styled-components';
import {device} from 'assets/styles/theme';

export const Wrapper = styled.div`
  position: relative;
 
  flex-direction: column;

  height: 100%;
  width: 100%;
  padding: 1rem;
  margin: 1rem;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 20px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);


@media ${device.tablet} {
    flex-direction: column;
}
`;