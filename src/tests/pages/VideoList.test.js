import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import VideoList from '../../pages/VideosList';
import { DEFAULT_STATE } from '../../redux/reducers';
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

  afterEach(cleanup);

  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<VideoList />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  it('verifica se todos as tracks com videos são renderizadas', async () => {
    renderWithReduxAndRouter(<VideoList />, STATE);

    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/video music/i)).toBeInTheDocument());

    mvids.forEach(async ({ strTrack }) => {
      await waitFor(() => expect(screen.getAllByText(strTrack)).toBeInTheDocument());
    });
  });

  it('verifica se ao clicar em uma track a pagina é redirecionada corretamente', async () => {
    const { history } = renderWithReduxAndRouter(<VideoList />, STATE);

    const { strTrack } = mvids[0];

    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/video music/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(strTrack)).toBeInTheDocument());

    const track = screen.getByText(strTrack);

    userEvent.click(track);

    expect(history.location.pathname).toBe(`/artist-details/track/${strTrack}`);
  });
});