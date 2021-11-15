import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import VideoList from '../../pages/VideosList';
import { DEFAULT_STATE } from '../../redux/reducers';
import getFavoriteTracks from '../../services/favorites/get/getFavoriteTracks';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';
import METALLICA_VIDEOS from '../mocks/data/VIDEOS';
import fetchMock from '../mocks/fetchMock';

const { artists: [artist] } = METALLICA;
const STATE = { ...DEFAULT_STATE, artistDetails: artist, artistCurrent: 'metallica' };
const { mvids } = METALLICA_VIDEOS;

describe('verifica a renderização e o funcionamento do componente VideoList', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<VideoList />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  it('verifica se ao clicar no icone de favoritos a track é salva no local storage', async () => {
    renderWithReduxAndRouter(<VideoList />, STATE);

    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/video music/i)).toBeInTheDocument());

    const [favorite] = screen.getAllByRole('button');
    expect(getFavoriteTracks()).toHaveLength(0);
    expect(favorite).toContainHTML('svg');

    userEvent.click(favorite);
    expect(getFavoriteTracks()).toHaveLength(1);

    userEvent.click(favorite);
    expect(getFavoriteTracks()).toHaveLength(0);
  });

  it('verifica se ao clicar em uma track a pagina é redirecionada corretamente', async () => {
    const { history } = renderWithReduxAndRouter(<VideoList />, STATE);

    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/video music/i)).toBeInTheDocument());

    const { strTrack } = mvids[0];

    const track = screen.getByText(strTrack);

    userEvent.click(track);

    expect(history.location.pathname).toBe(`/artist-details/track/${strTrack}`);
  });

  it('verifica se todos as tracks com videos são renderizadas', async () => {
    renderWithReduxAndRouter(<VideoList />, { ...STATE, artistDetails: { ...artist, idArtist: '00000' } });

    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/video music/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/empty/gi)).toBeInTheDocument());
  });

  it('verifica se todos as tracks com videos são renderizadas', async () => {
    renderWithReduxAndRouter(<VideoList />, STATE);

    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/video music/i)).toBeInTheDocument());

    mvids.forEach(async ({ strTrack }) => {
      await waitFor(() => expect(screen.getAllByText(strTrack)).toBeInTheDocument());
    });
  });
});
