import { screen } from '@testing-library/react';
import React from 'react';
import Header from '../../components/Header';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';

const { artists: [artist] } = METALLICA;

const STATE = { ...DEFAULT_STATE, artistDetails: artist };
const { strArtistLogo, strArtist } = artist;

describe('Verifica a renderização do componete Header', () => {
  it('verifica se o logo da banda é renderizado', () => {
    renderWithReduxAndRouter(<Header />, STATE);

    const img = screen.getByAltText(`logo of ${strArtist}`);

    expect(img).toBeInTheDocument();
    expect(img).toHaveProperty('src', strArtistLogo);
  });
  it('verifica se não houver logo, renderiza o nome da banda', () => {
    renderWithReduxAndRouter(<Header />, { ...STATE, artistDetails: { ...artist, strArtistLogo: '' } });

    expect(screen.getByRole('heading', { name: strArtist }));
  });
});
