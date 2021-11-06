import { cleanup, screen, waitFor } from '@testing-library/react';
import React from 'react';
import detailKeys from '../../constants/data';
import ArtistDetails from '../../pages/ArtistDetails';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';

const { artists: [artist] } = METALLICA;
describe('Verifica a renderização e o funcionamento do componente ArtistDetails', () => {
  afterEach(cleanup);
  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<ArtistDetails />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  it('verifica se as informações são renderizadas corretamente', async () => {
    await renderWithReduxAndRouter(<ArtistDetails />, { ...DEFAULT_STATE, artistDetails: artist, artistCurrent: 'metallica' });
    await waitFor(() => expect(screen.getAllByTestId('info')));
    const infos = screen.getAllByTestId('info');

    infos.forEach((info, i) => {
      const { value } = detailKeys[i];
      expect(info).toHaveTextContent(artist[value]);
      expect(info.parentElement.tagName).toBe('P');
    });
  });
});
