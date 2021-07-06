import styled from "styled-components";

export const Wrapper = styled.li`
display: flex;
justify-content: center;
align-items: center;





p{
    font-family: 'KoHo', sans-serif;
    font-size: ${({theme}) => theme.fontSize.l};
    margin: 0.25rem;
    margin-right: 2rem;
}
`;

