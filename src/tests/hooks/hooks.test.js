import { renderHook } from '@testing-library/react-hooks/pure';
import useDinamicImages from '../../hooks/useDinamicImages';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';

const { artists } = METALLICA;
const [artist] = artists;
const {
  strArtist, strArtistFanart, strArtistFanart2, strArtistFanart3,
} = artist;
const artistTest = {
  strArtist, strArtistFanart, strArtistFanart2, strArtistFanart3,
};

describe('verifica o funcionamento do custom hook useDinamicImages', () => {
  jest.setTimeout(16000);
  it('verifica a renderização da imagens', async () => {
    const { result, waitForValueToChange } = renderHook(() => useDinamicImages(artistTest));

    expect(result.current[0]).toBe(strArtistFanart);

    await waitForValueToChange(() => result.current[0], { timeout: 4000 });
    expect(result.current[0]).toBe(strArtistFanart2);

    await waitForValueToChange(() => result.current[0], { timeout: 4000 });
    expect(result.current[0]).toBe(strArtistFanart3);

    await waitForValueToChange(() => result.current[0], { timeout: 4000 });
    expect(result.current[0]).toBe(strArtistFanart);

    await waitForValueToChange(() => result.current[0], { timeout: 4000 });
    expect(result.current[0]).toBe(strArtistFanart2);

    await waitForValueToChange(() => result.current[0], { timeout: 4000 });
    expect(result.current[0]).toBe(strArtistFanart3);
  });
});
