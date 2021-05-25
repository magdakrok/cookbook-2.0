import { GlobalStyle } from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import DashBoard from './Dashboard/Dashboard';
import RecipesProvider from 'providers/RecipeProvider';
function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <RecipesProvider>
          <DashBoard />
        </RecipesProvider>
      </MainTemplate>
    </ThemeProvider>
  );
}

export default Root;
