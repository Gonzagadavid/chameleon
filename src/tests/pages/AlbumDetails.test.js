import { cleanup, waitFor, screen } from '@testing-library/react';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderPathWithRedux from '../helpers/renderPathWithRedux';
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

describe('Verifica a renderização e o funcionamento do componente page AlbumDetails', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
    window.scrollTo = jest.fn((value) => value);
  });

  afterEach(cleanup);

  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderPathWithRedux('/artist-details/discography/2110232', { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  it('verifica se o passar o id de um album as requições são feitas', async () => {
    renderPathWithRedux('/artist-details/discography/2110232', STATE);

    await waitFor(() => expect(global.fetch).toBeCalledTimes(2));
  });

  it('verifica se após as requisições os dados são salvos no estado geral', async () => {
    const { store } = renderPathWithRedux('/artist-details/discography/2110232', STATE);

    await waitFor(() => expect(global.fetch).toBeCalledTimes(2));

    expect(store.getState().album).toEqual(album);
    expect(store.getState().trackList).toEqual(track);
  });

  it('verifica se ao ser renderizada com album que não existe como parametro o erro é mostrado', async () => {
    renderPathWithRedux('/artist-details/discography/00000', STATE);
    await waitFor(() => expect(global.fetch).toBeCalledTimes(2));
    const message = 'An error has occurred in the application, please try again later!';

    await waitFor(() => expect(screen.getByText(message)).toBeInTheDocument());
  });
});
