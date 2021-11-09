import { screen } from '@testing-library/react';
import React from 'react';
import AlbumDetailsContainer from '../../components/AlbumDetailsContainer';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import METALLICA_ALBUM from '../mocks/data/ALBUM';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';

const { artists: [artist] } = METALLICA;
const { album: [album] } = METALLICA_ALBUM;
const STATE = {
  ...DEFAULT_STATE, artistDetails: artist, artistCurrent: 'metallica', album,
};
const { strAlbum, strAlbumThumb } = album;

describe('Verifica a renderização e o funcionamento do componente AlbumDetailsContainer', () => {
  it('Ao ser renderizado, exibe o titulo e a imagem do album salvo no estado', () => {
    renderWithReduxAndRouter(<AlbumDetailsContainer />, STATE);

    const title = screen.getByText(strAlbum);
    const img = screen.getByAltText('album front');

    expect(title).toBeInTheDocument();
    expect(img).toHaveProperty('src', strAlbumThumb);
  });
});
