import { cleanup, screen, waitFor } from '@testing-library/react';
import { cleanHeader } from '../../functions/cleanLyric';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderPathWithRedux from '../helpers/renderPathWithRedux';
import METALLICA_LYRIC from '../mocks/data/LYRIC';
import METALLICA_VIDEOS from '../mocks/data/VIDEOS';
import fetchMock from '../mocks/fetchMock';

const { mvids } = METALLICA_VIDEOS;

const STATE = { ...DEFAULT_STATE, artistCurrent: 'metallica', musicVideos: mvids };

const { lyrics } = METALLICA_LYRIC;
const expectStateLyric = cleanHeader(lyrics, 'the unforgiven', 'metallica');

describe('Verifica a renderização e o funcionamento do componente page Track', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
    window.scrollTo = jest.fn((value) => value);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('verifica se ao ser renderizada a requisição da letra é feita', async () => {
    const { store } = renderPathWithRedux('/artist-details/track/the unforgiven', STATE);
    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));

    await waitFor(() => expect(screen.getByText(/the unforgiven/i)).toBeInTheDocument());
    expect(store.getState().lyric).toBe(expectStateLyric);
  });
});
