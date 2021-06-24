import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 310px;
  margin: 2rem 2rem;
  height: 320px;
  padding: 1rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 20px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  @media ${device.laptop} {
    margin: 2rem 4rem;
  }
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
