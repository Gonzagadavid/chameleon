import { screen } from '@testing-library/react';
import React from 'react';
import ArtistDetails from '../../pages/ArtistDetails';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';

describe('Verifica a renderização e o funcionamento do componente ArtistDetails', () => {
  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<ArtistDetails />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
