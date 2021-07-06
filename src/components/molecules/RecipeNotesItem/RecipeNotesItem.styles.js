import styled from "styled-components";
import { ReactComponent as Remove } from 'assets/icons/remove.svg'  

export const Wrapper = styled.li`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-left: 1rem;


p{
    font-family: 'KoHo', sans-serif;
    font-size: ${({theme}) => theme.fontSize.l};
    margin: 0.25rem;
    margin-right: 2rem;
}
`;

export const RemoveIcon = styled(Remove)`
 width: 25px;
 height: 25px;
`;