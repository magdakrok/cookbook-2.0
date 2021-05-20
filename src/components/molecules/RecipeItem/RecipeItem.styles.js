import styled from 'styled-components';

export const Wrapper = styled.li`
display:flex;
flex-direction: column;
width: 310px;
margin: 1rem;
height: 18rem;
background-color: ${({theme}) => theme.colors.white};
`

export const Image = styled.img`
width: 18vw;
height: 20vh;
align-self: center;
`;

export const Title = styled.h3`
font-size: ${({theme}) => theme.fontSize.l};
color: ${({theme}) => theme.colors.black};
padding-left: 1rem;

`;

export const ButtonsWrapper=styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
`