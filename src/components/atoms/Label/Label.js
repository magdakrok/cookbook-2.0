import styled from 'styled-components';

export const Label = styled.label`
  margin-left: 2rem;
  font-family: 'KoHo', sans-serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
`;
