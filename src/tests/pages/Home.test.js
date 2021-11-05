import {
  cleanup, fireEvent, screen, waitFor,
} from '@testing-library/react';
import React from 'react';
import { ARTIST_STATE, FAVORITE_KEY } from '../../constants/storage';
import Home from '../../pages/Home';
import getLocal from '../../services/storage/getLocal';
import setLocal from '../../services/storage/setLocal';
import getSession from '../../services/storage/getSession';
import setSession from '../../services/storage/setSession';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import FAVORITE from '../mocks/data/FAVORITES';
import fetchMock from '../mocks/fetchMock';

global.fetch = jest.fn(fetchMock);

describe('verifica a renderização o funcionamento do compoennte Home', () => {
  afterEach(cleanup);

  it('verifica os textos estão corretos', () => {
    renderWithReduxAndRouter(<Home />);

    const title = screen.getByRole('heading', { level: 1 });
    const serchBar = screen.getByPlaceholderText(/search/i);
    const btn = screen.getByRole('button');

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Chameleon');
    expect(title).toContainHTML('img');
    expect(title.lastChild).toHaveAttribute('alt', 'chameleon');

    expect(serchBar).toBeInTheDocument();
    expect(serchBar.tagName).toBe('INPUT');

    expect(btn).toBeInTheDocument();
    expect(btn).toContainHTML('svg');
  });

  it('verifica se ao rederizar o session storage é limpo', () => {
    setSession(ARTIST_STATE, { test: 'testing' });
    expect(getSession(ARTIST_STATE)).toEqual({ test: 'testing' });

    renderWithReduxAndRouter(<Home />);

    expect(getSession(ARTIST_STATE)).toBeNull();
  });

  it('verifica se ao não ter artistas em favoritos o seletor não é renderizado', () => {
    renderWithReduxAndRouter(<Home />);

    expect(getLocal(FAVORITE_KEY)).toBeNull();
    expect(screen.queryByText(/favoritos/i)).toBeNull();
  });

  it('verifica se ao ter artistas em favoritos o seletor é renderizado', async () => {
    setLocal(FAVORITE_KEY, FAVORITE);
    expect(getLocal(FAVORITE_KEY)).toEqual(FAVORITE);

    const { history } = renderWithReduxAndRouter(<Home />);

    expect(screen.getByText(/favorites/i)).toBeInTheDocument();

    const favorites = screen.getByRole('combobox');

    expect(favorites).toBeInTheDocument();

    fireEvent.change(favorites, { target: { value: 'black alien' } });

    waitFor(() => expect(history.location.pathname).toBe('/artist-details'));
  });
});
