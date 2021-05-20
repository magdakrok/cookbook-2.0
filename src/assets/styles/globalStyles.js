import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=KoHo:wght@400;700&display=swap');
html{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
*, *::after, *::before{
    box-sizing: inherit;
   
}
body{
    font-family: 'KoHo', sans-serif;;
    margin: 0;
    padding: 0;
}
a, button{
    font-family: 'KoHo', sans-serif;
}
`;
