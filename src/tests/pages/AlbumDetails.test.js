import { cleanup, waitFor } from '@testing-library/react';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderPathWithRedux from '../helpers/renderPathWithRedux';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';
import METALLICA_DISCOGRAPHY from '../mocks/data/DISCOGRAPHY';
import fetchMock from '../mocks/fetchMock';

const { artists: [artist] } = METALLICA;
const { album } = METALLICA_DISCOGRAPHY;
const STATE = {
  ...DEFAULT_STATE, artistDetails: artist, artistCurrent: 'metallica', albums: album,
};

describe('Verifica a renderização e o funcionamento do componente page AlbumDetails', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
    window.scrollTo = jest.fn((value) => value);
  });

  afterEach(cleanup);

  it('verifica se o passar o id de um album a requição é feita', async () => {
    renderPathWithRedux('/artist-details/discography/2110232', STATE);

    await waitFor(() => expect(global.fetch).toBeCalledTimes(2));
  });

  it('verifica se o passar o id de um album a requição é feita', async () => {
    renderPathWithRedux('/artist-details/discography/2110232', STATE);
  });
});
