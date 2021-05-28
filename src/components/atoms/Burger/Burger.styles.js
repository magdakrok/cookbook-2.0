import styled from 'styled-components';
export const StyledBurger = styled.button`
  position: absolute;
  top: 15%;
  right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.colors.brown : theme.colors.brown};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      width: 2rem;
      transform: ${({ open }) => (open ? 'rotate(45deg) ' : 'rotate(0)')};
    }

    :nth-child(2) {
      width: 1.5rem;
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      width: 2rem;

      transform: ${({ open }) => (open ? 'rotate(-45deg) ' : ' rotate(0)')};
    }
  }
`;
