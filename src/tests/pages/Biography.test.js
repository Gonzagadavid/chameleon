import { cleanup, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Biography from '../../pages/Biography';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';

const { artists: [artist] } = METALLICA;
describe('Verifica a renderização e o funcionamento com componente Biography', () => {
  afterEach(cleanup);

  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<Biography />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  it('verifica a renderização do titulo da página', async () => {
    await renderWithReduxAndRouter(<Biography />, { ...DEFAULT_STATE, artistDetails: artist });
    await waitFor(() => expect(screen.getByText(/biography/i)).toBeInTheDocument());

    const title = screen.getByRole('heading', { level: 2 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Biography');
  });
});
