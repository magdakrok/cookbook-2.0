import React from 'react';
import RecipeItem from './RecipeItem';
import {renderWithProviders} from 'helpers/renderWithThemeProvider';
import {fireEvent, getByTestId, render, screen , unmountComponentAtNode} from '@testing-library/react';
import { Image, FavoriteButton } from './RecipeItem.styles';




describe('Recipe Item', () => {
  
    it('Renders the component', () => {
        renderWithProviders(<RecipeItem key="recipe" key = "key" recipe="recipe" />);
        screen.getByText('Notatki');
    });
    it('checking render photo', () => {
      const img = render(<Image/>);
      expect(img).toBeTruthy()
    });

    // it('checking favorite button', () =>{
    //     let favorite=false;
    //    const id =1;
    //     renderWithProviders(<RecipeItem key="recipe" key = "key" recipe="recipe"><FavoriteButton onClick={() => updateFavoriteRecipe(id, favorite)}/></RecipeItem>);
    //      const button = screen.getByTestId('favorite button');
    //      const  buttonclick = fireEvent.click(button);
    //      expect(buttonclick).toBeValid(false)
    //     console.log(buttonclick);
     //  expect(button).toBeTruthy();
    //    render(<FavoriteButton isFavorite="true" onClick="onClick"/>);

    // })

});
