import React from 'react';
import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'helpers/axios';
import RecipeItem from 'components/molecules/RecipeItem/RecipeItem';
import RecipeList from 'components/organisms/RecipeList/RecipeList';
import Dashboard from '../views/Dashboard/Dashboard';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import DashBoard from '../views/Dashboard/Dashboard';

const mock = new MockAdapter(axios);

describe('RecipeProvider', () => {
  afterEach(() => {
    mock.reset();
  });

  const recipeType = 'cake';

  const data = {
    test1: {
      favorite: true,
      http: 'test1',
      notes: {
        content: 'test1',
        id: 0,
      },
      photo: '',
      title: 'test1',
    },
  };

  const fakeFavorite = {
    favorite: false,
  };
  it('Fetch Recipes ', async () => {
    mock
      .onGet(`${recipeType}.json`, {
        params: { searchText: 'Test1' },
      })
      .reply(200, {
        data: data,
      });

    axios
      .get(`${recipeType}.json`, {
        params: { searchText: 'Test1' },
      })
      .then(function (response) {
        console.log(response.data);
      });
  });

  it('Changes Favorite button', async () => {
    mock.onPatch(`${recipeType}/test1.json`, {}).reply(200, fakeFavorite);

    axios
      .patch(`${recipeType}/test1.json`, {})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  it('delete recipe', async () => {
    mock.onDelete(`${recipeType}/test1.json`, {}).reply(200);

    axios
      .delete(`${recipeType}/test1.json`, {})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
});
