import {
  cleanup, screen, waitFor,
} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import detailKeys from '../../constants/data';
import ArtistDetails from '../../pages/ArtistDetails';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import notFound from '../../images/notFoundImage.png';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';
import getFavoritesArtists from '../../services/favorites/get/getFavoritesArtists';
import store from '../../redux/store';
import { actionArtistCurrent } from '../../redux/actions';
import setFavorites from '../../services/favorites/set/setFavorites';

const { artists: [artist] } = METALLICA;

describe('Verifica a renderização e o funcionamento do componente ArtistDetails', () => {
  afterEach(cleanup);

  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<ArtistDetails />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  it('verifica se as informações são renderizadas corretamente', async () => {
    renderWithReduxAndRouter(<ArtistDetails />, { ...DEFAULT_STATE, artistDetails: artist });
    await waitFor(() => expect(screen.getAllByTestId('info')));
    const infos = screen.getAllByTestId('info');

    infos.forEach((info, i) => {
      const { value } = detailKeys[i];
      expect(info).toHaveTextContent(artist[value]);
      expect(info.parentElement.tagName).toBe('P');
    });
  });

  it('verifica se imagem da banda é renderizada corretamente', async () => {
    renderWithReduxAndRouter(<ArtistDetails />, { ...DEFAULT_STATE, artistDetails: artist });
    await waitFor(() => expect(screen.getAllByTestId('info')));

    const { strArtistWideThumb: thumb } = artist;

    const image = screen.getByAltText('artists');

    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', thumb);
  });

  it('verifica se a segunda opção de imagem da banda é renderizada corretamente'
  + ', quando não existe a primeira', async () => {
    renderWithReduxAndRouter(<ArtistDetails />, { ...DEFAULT_STATE, artistDetails: { ...artist, strArtistWideThumb: '' } });
    await waitFor(() => expect(screen.getAllByTestId('info')));

    const { strArtistFanart: thumb } = artist;

    const image = screen.getByAltText('artists');

    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', thumb);
  });

  it('verifica se a imagem not found é renderizada corretamente'
  + ', quando não existe a primeira e a segunda', async () => {
    renderWithReduxAndRouter(<ArtistDetails />, { ...DEFAULT_STATE, artistDetails: {} });
    await waitFor(() => expect(screen.getAllByTestId('info')));

    const image = screen.getByAltText('artists');

    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', `http://localhost/${notFound}`);
  });

  it('verifica se ao clicar no icone de favoritos o artista é salvo no local storage', async () => {
    setFavorites({ 'pearl jam': { tracks: [], albums: [], logo: '' } });
    store.dispatch(actionArtistCurrent('metallica'));
    renderWithReduxAndRouter(<ArtistDetails />, {
      ...DEFAULT_STATE, artistDetails: artist, artistCurrent: 'metallica',
    });

    await waitFor(() => expect(screen.getAllByTestId('info')));

    const favorite = screen.getByRole('button');
    expect(getFavoritesArtists()).toHaveLength(1);
    expect(favorite).toContainHTML('svg');

    userEvent.click(favorite);
    expect(getFavoritesArtists()).toHaveLength(2);
    expect(getFavoritesArtists()).toEqual(['pearl jam', 'metallica']);

    userEvent.click(favorite);
    expect(getFavoritesArtists()).toHaveLength(1);
    expect(getFavoritesArtists()).toEqual(['pearl jam']);
  });
});
