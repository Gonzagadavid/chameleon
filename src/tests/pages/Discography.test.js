import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import arraySortNum from '../../functions/arraySortNum';
import Discography from '../../pages/Discography';
import { DEFAULT_STATE } from '../../redux/reducers';
import getFavoriteAlbums from '../../services/favorites/get/getFavoriteAlbums';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';
import METALLICA_DISCOGRAPHY from '../mocks/data/DISCOGRAPHY';
import fetchMock from '../mocks/fetchMock';

const { artists: [artist] } = METALLICA;
const STATE = { ...DEFAULT_STATE, artistDetails: artist, artistCurrent: 'metallica' };
const { album } = METALLICA_DISCOGRAPHY;
const albuns = arraySortNum(album, 'intYearReleased');

describe('Verifica a renderização e o funcionamento do componente Discography', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
  });

  afterEach(cleanup);

  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<Discography />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  it('Verifica se ao rederizar a pagina a requisições são feitas e salvas no estado da aplicação', async () => {
    const { store } = renderWithReduxAndRouter(<Discography />, STATE);
    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));

    expect(store.getState().albums).toEqual(albuns);
  });

  it('verifica se ao clicar no icone de favorito o album é adicionado no local storage', async () => {
    renderWithReduxAndRouter(<Discography />, STATE);
    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/discography/i)));

    const favorites = screen.getAllByRole('button');

    albuns.forEach(({ strAlbum, intYearReleased }, i) => {
      const albumTitle = screen.getByRole('heading', { name: strAlbum });

      expect(albumTitle).toBeInTheDocument();

      expect(albumTitle.nextElementSibling).toHaveTextContent(intYearReleased);

      expect(getFavoriteAlbums()).toHaveLength(0);

      userEvent.click(favorites[i]);

      expect(getFavoriteAlbums()).toHaveLength(1);
      expect(getFavoriteAlbums()).toContain(strAlbum);

      userEvent.click(favorites[i]);
      expect(getFavoriteAlbums()).toHaveLength(0);
    });
  });
});
