import {
  cleanup, fireEvent, screen, waitFor,
} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import { ARTIST_STATE, FAVORITE_KEY } from '../../constants/storage';
import Home from '../../pages/Home';
import getLocal from '../../services/storage/getLocal';
import setLocal from '../../services/storage/setLocal';
import getSession from '../../services/storage/getSession';
import setSession from '../../services/storage/setSession';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import FAVORITE from '../mocks/data/FAVORITES';
import fetchMock from '../mocks/fetchMock';
import { BLACK_ALIEN, METALLICA } from '../mocks/data/ARTIST_DETAILS';
import App from '../../App';

describe('verifica a renderização o funcionamento do compoennte Home', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
  });

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

    const { history, store } = renderWithReduxAndRouter(<Home />);

    expect(screen.getByText(/favorites/i)).toBeInTheDocument();

    const favorites = screen.getByRole('combobox');

    expect(favorites).toBeInTheDocument();

    await selectEvent.openMenu(favorites);

    userEvent.click(screen.getByText('black alien'));

    await waitFor(() => expect(global.fetch).toBeCalled());
    await waitFor(() => expect(history.location.pathname).toBe('/artist-details'));
    expect(store.getState().artistDetails).toEqual(BLACK_ALIEN.artists[0]);
  });

  it('verifica o funcionamento de busca por um artista existente ', async () => {
    const { history, store } = renderWithReduxAndRouter(<Home />);

    const serchBar = screen.getByPlaceholderText(/search/i);
    const btn = screen.getByRole('button');

    userEvent.type(serchBar, 'metallica');
    userEvent.click(btn);
    await waitFor(() => expect(global.fetch).toBeCalled());
    await waitFor(() => expect(history.location.pathname).toBe('/artist-details'));
    expect(store.getState().artistDetails).toEqual(METALLICA.artists[0]);
  });

  it('Ao clicar no botão de busca com o input vazio a menssagem correta é rederizada', async () => {
    window.scrollTo = jest.fn((value) => value);
    const { store } = renderWithReduxAndRouter(<App />);

    const message = 'Write the name of a band or artist in the music bar';
    const btn = screen.getByRole('button');

    fireEvent.click(btn);

    await waitFor(() => expect(screen.getByText(message)).toBeInTheDocument());
    expect(store.getState().message).toBe(message);

    userEvent.click(screen.getByText(/ok/i));
    expect(screen.queryByText(message)).toBeNull();
    expect(store.getState().message).toBe('');
  });

  it('Se a menssagem correta é rederizada, na busca por um artista que não existente', async () => {
    const { store } = renderWithReduxAndRouter(<App />);

    const message = 'The name entered was not found in our database, check the name or choose another one';
    const serchBar = screen.getByPlaceholderText(/search/i);
    const btn = screen.getByRole('button');

    userEvent.type(serchBar, 'nonexistent');
    userEvent.click(btn);

    await waitFor(() => expect(screen.getByText(message)).toBeInTheDocument());
    expect(store.getState().message).toBe(message);

    userEvent.click(screen.getByText(/ok/i));
    expect(screen.queryByText(message)).toBeNull();
    expect(store.getState().message).toBe('');
  });

  it('Se a menssagem correta é rederizada, quando ocorre um erro na requisição', async () => {
    const { store } = renderWithReduxAndRouter(<App />);

    const message = 'An error has occurred in the application, please try again later!';
    const serchBar = screen.getByPlaceholderText(/search/i);
    const btn = screen.getByRole('button');

    userEvent.type(serchBar, 'error');
    userEvent.click(btn);

    await waitFor(() => expect(screen.getByText(message)).toBeInTheDocument());
    expect(store.getState().error).toBe(message);

    userEvent.click(screen.getByText(/ok/i));
    expect(screen.queryByText(message)).toBeNull();
    expect(store.getState().error).toBe('');
  });
});
