import React from 'react';
import RecipeItem from './RecipeItem';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import {
  fireEvent,
  getByTestId,
  render,
  screen,
  unmountComponentAtNode,
} from '@testing-library/react';
import { Image, FavoriteButton } from './RecipeItem.styles';

describe('Recipe Item', () => {
  it('Renders the component', () => {
    renderWithProviders(<RecipeItem key="recipe" key="key" recipe={{}} />);
    screen.getByText('Notatki');
  });
  it('checking render photo', () => {
    const img = render(<Image />);
    expect(img).toBeTruthy();
  });
});
