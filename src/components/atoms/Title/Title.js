import styled from 'styled-components';
import { device } from 'assets/styles/theme';

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  padding-left: 0;

  @media ${device.tablet} {
    padding-left: 1rem;
  }
`;
