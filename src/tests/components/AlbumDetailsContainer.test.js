import { screen, waitFor } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import selectEvent from 'react-select-event';
import AlbumDetailsContainer from '../../components/AlbumDetailsContainer';
import arrayKeys from '../../functions/arrayKeys';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import METALLICA_ALBUM from '../mocks/data/ALBUM';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';
import notFound from '../../images/notFoundImage.png';

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

  it('Ao ser renderizado, sem album exibe a imagem notFound', () => {
    renderWithReduxAndRouter(
      <AlbumDetailsContainer />,
      { ...STATE, album: { ...album, strAlbumThumb: '' } },
    );

    const title = screen.getByText(strAlbum);
    const img = screen.getByAltText('album front');

    expect(title).toBeInTheDocument();
    expect(img).toHaveProperty('src', `http://localhost/${notFound}`);
  });

  it('Verifica se exibe a descrição de acordo com a linguagem selecionada', async () => {
    renderWithReduxAndRouter(<AlbumDetailsContainer />, STATE);

    const description = screen.getByTestId('description');
    const options = arrayKeys(artist, 'strDescription');

    options.forEach(async (option, i) => {
      if (i === 0) return;
      const text = options[i - 1];
      selectEvent.openMenu(screen.getByText(text));
      userEvent.click(screen.getByText(option));
      const { findByText } = within(description);
      const biographyText = artist[`strDescription${option}`].replaceAll('\n', '').trim();
      await waitFor(() => expect(findByText(biographyText)).toBeInTheDocument());
    });
  });
});
