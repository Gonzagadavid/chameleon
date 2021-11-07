import { cleanup, screen } from '@testing-library/react';
import React from 'react';
import Favorites from '../../pages/Favorites';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import fetchMock from '../mocks/fetchMock';

describe('Verifica a renderização e o funcionemento do componente page Favorites', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
  });

  afterEach(cleanup);

  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<Favorites />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
