import React from 'react';
import {render} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import {theme} from 'assets/style/theme';
import RecipeProvider from 'providers/RecipeProvider';

export const renderWithProviders = (children) => {
    return render (
      <ThemeProvider theme={theme}>
          <RecipeProvider>{children}</RecipeProvider>
      </ThemeProvider>
    );
};

