import { GlobalStyle } from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import RecipeList from 'components/organisms/RecipeList/RecipeList';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import DashBoard from './Dashboard/Dashboard';
function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
       <DashBoard/>
      </MainTemplate>
    </ThemeProvider>
  );
}

export default Root;
