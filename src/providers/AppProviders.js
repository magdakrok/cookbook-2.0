import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import RecipesProvider from 'providers/RecipeProvider/RecipeProvider';
import RecipeNotesProvider from './RecipeNotesProvider/RecipeNotesProvider';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecipesProvider>
          <RecipeNotesProvider>{children}</RecipeNotesProvider>
        </RecipesProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
