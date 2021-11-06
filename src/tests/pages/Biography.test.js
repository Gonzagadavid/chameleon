import { within } from '@testing-library/dom';
import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import selectEvent from 'react-select-event';
import arrayKeys from '../../functions/arrayKeys';
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
    renderWithReduxAndRouter(<Biography />, { ...DEFAULT_STATE, artistDetails: artist });
    await waitFor(() => expect(screen.getByText(/biography/i)).toBeInTheDocument());

    const title = screen.getByRole('heading', { level: 2 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Biography');
  });

  it('veirifica se renderiza o texto de acordo com a linguagem selecionada', async () => {
    renderWithReduxAndRouter(<Biography />, { ...DEFAULT_STATE, artistDetails: artist });
    await waitFor(() => expect(screen.getByText(/biography/i)).toBeInTheDocument());

    const biography = screen.getByTestId('biography');
    expect(biography).toBeInTheDocument();
    const options = arrayKeys(artist, 'strBiography');

    options.forEach(async (option, i) => {
      if (i === 0) return;
      const text = options[i - 1];
      selectEvent.openMenu(screen.getByText(text));
      userEvent.click(screen.getByText(option));
      const { findByText } = within(biography);
      const biographyText = artist[`strBiography${option}`].replaceAll('\n', '').trim();
      await waitFor(() => expect(findByText(biographyText)).toBeInTheDocument());
    });
  });
});
