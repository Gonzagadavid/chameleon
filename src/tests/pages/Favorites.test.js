import {
  cleanup, screen, waitFor, waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { FAVORITE_KEY } from '../../constants/storage';
import Favorites from '../../pages/Favorites';
import { actionArtistCurrent } from '../../redux/actions';
import { DEFAULT_STATE } from '../../redux/reducers';
import storeApp from '../../redux/store';
import getFavoriteAlbums from '../../services/favorites/get/getFavoriteAlbums';
import getFavorites from '../../services/favorites/get/getFavorites';
import setFavorites from '../../services/favorites/set/setFavorites';
import getLocal from '../../services/storage/getLocal';
import setLocal from '../../services/storage/setLocal';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';
import FAVORITES from '../mocks/data/FAVORITES';
import fetchMock from '../mocks/fetchMock';

const { artists: [artist] } = METALLICA;
const STATE = { ...DEFAULT_STATE, artistDetails: artist, artistCurrent: 'metallica' };

describe('Verifica a renderização e o funcionemento do componente page Favorites', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
  });

  afterEach(cleanup);

  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<Favorites />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  it('verifica se ao ser renderizado os albuns salvos em favoritos são renderizados', async () => {
    setLocal(FAVORITE_KEY, FAVORITES);
    storeApp.dispatch(actionArtistCurrent('metallica'));
    renderWithReduxAndRouter(<Favorites />, STATE);

    await waitFor(() => expect(screen.queryByText('Tracks')).toBeInTheDocument());

    const albunsFavorites = getLocal(FAVORITE_KEY).metallica.albums;
    const tracksFavorites = getLocal(FAVORITE_KEY).metallica.tracks;
    await (() => expect(screen.getAllByText(tracksFavorites[0]).toBeInTheDocument()));

    albunsFavorites.forEach(async (album) => {
      await waitFor(() => expect(screen.getAllByText(album).toBeInTheDocument()));
    });
  });

  it('verifica se ao ser renderizado as tracks salvas em favoritos são renderizadas', async () => {
    setLocal(FAVORITE_KEY, FAVORITES);
    storeApp.dispatch(actionArtistCurrent('metallica'));
    renderWithReduxAndRouter(<Favorites />, STATE);

    await waitFor(() => expect(screen.queryByText('Tracks')).toBeInTheDocument());

    const tracksFavorites = getLocal(FAVORITE_KEY).metallica.tracks;
    await (() => expect(screen.getAllByText(tracksFavorites[0]).toBeInTheDocument()));

    tracksFavorites.forEach(async (track) => {
      await waitFor(() => expect(screen.getAllByText(track).toBeInTheDocument()));
    });
  });
});
