import styled from 'styled-components';
import { device } from 'assets/styles/theme';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 310px;
  margin: 2rem 4rem;
  height: 320px;
  padding: 1rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const UrlWrapper = styled.div`
  width: 250px;
  display: flex;
  align-self: center;

  &a {
    text-decoration: none;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 150px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  padding-left: 0;

  @media ${device.tablet} {
    padding-left: 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  margin-top: 1rem;
  p {
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
  }
`;
