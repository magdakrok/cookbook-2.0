import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  flex-direction: column;
  width: 40%;
  height: 100%;
  width: 310px;
  padding: 1rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 20px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
