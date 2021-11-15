import { cleanup, screen, waitFor } from '@testing-library/react';
import React from 'react';
import TracksContainer from '../../components/TracksContainer';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import METALLICA_ALBUM from '../mocks/data/ALBUM';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';
import METALLICA_TRACKS from '../mocks/data/TRACKS';
import fetchMock from '../mocks/fetchMock';

const { artists: [artist] } = METALLICA;
const { album: [album] } = METALLICA_ALBUM;
const { track } = METALLICA_TRACKS;
const STATE = {
  ...DEFAULT_STATE, artistDetails: artist, artistCurrent: 'metallica', albums: album,
};

describe('verifica a renderização e o funcionamento do componente TrackContainer', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
  });

  afterEach(cleanup);

  it('verifica o funcionamento de um artista sem videos', async () => {
    renderWithReduxAndRouter(
      <TracksContainer trackList={track} />,
      { ...STATE, artistDetails: { ...artist, idArtist: '00000' } },
    );

    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(track[0].strTrack)).toBeInTheDocument());
  });
});
