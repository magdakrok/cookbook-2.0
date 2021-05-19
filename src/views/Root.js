import { GlobalStyle } from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>App</h1>
    </ThemeProvider>
  );
}

export default Root;
