import { renderHook, act } from '@testing-library/react-hooks/pure';
import matchMediaPolyfill from 'mq-polyfill';
import useDinamicImages from '../../hooks/useDinamicImages';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';
import resizeTo from '../mocks/risizeTo';

const { artists } = METALLICA;
const [artist] = artists;
const {
  strArtist, strArtistFanart, strArtistFanart2, strArtistFanart3,
} = artist;
const artistTest = {
  strArtist, strArtistFanart, strArtistFanart2, strArtistFanart3,
};

matchMediaPolyfill(window);
window.resizeTo = resizeTo;

describe('verifica o funcionamento dos custom hooks ', () => {
  jest.setTimeout(16000);
  it('verifica o funcionamento de useDinamicImages', async () => {
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

  it('verifica o funcionamento deuseWindowDimensions', async () => {
    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current[0]).toBe(1024);
    expect(result.current[1]).toBe(768);

    act(() => window.resizeTo(360, 500));

    expect(result.current[0]).toBe(360);
    expect(result.current[1]).toBe(500);
  });
});
