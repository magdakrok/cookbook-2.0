import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 310px;
  margin: 1rem;
  height: 320px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.img`
  width: 250px;
  height: 180px;
  align-self: center;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  padding-left: 2rem;
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
