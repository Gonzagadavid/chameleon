import React from 'react';
import Home from '../../pages/Home';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import fetchMock from '../mocks/fetchMock';

global.fetch = jest.fn(fetchMock);

describe('verifica a renderização dos componentes', () => {
  it('verifica os textos estão corretos', () => {
    const { store } = renderWithReduxAndRouter(<Home />);
  });
});
