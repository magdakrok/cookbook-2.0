import { GlobalStyle } from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import DashBoard from './Dashboard/Dashboard';
import RecipesProvider from 'providers/RecipeProvider';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
      <MainTemplate>
        <RecipesProvider>
          
          <Switch>
          <Route exact path="/">
          <Redirect to="/przepisy/ciasta" />
          </Route>
          <Route path="/przepisy/:type?">
            <DashBoard />
          </Route>
          </Switch>
         
        </RecipesProvider>
      </MainTemplate>
      </Router>
    </ThemeProvider>
  );
}

export default Root;
