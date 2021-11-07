import { cleanup, screen, waitFor } from '@testing-library/react';
import React from 'react';
import arraySortNum from '../../functions/arraySortNum';
import Discography from '../../pages/Discography';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import { METALLICA } from '../mocks/data/ARTIST_DETAILS';
import METALLICA_DISCOGRAPHY from '../mocks/data/DISCOGRAPHY';
import fetchMock from '../mocks/fetchMock';

const { artists: [artist] } = METALLICA;
const STATE = { ...DEFAULT_STATE, artistDetails: artist, artistCurrent: 'metallica' };
const { album } = METALLICA_DISCOGRAPHY;
const albuns = arraySortNum(album, 'intYearReleased');

describe('Verifica a renderização e o funcionamento do componente Discography', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
  });

  afterEach(cleanup);

  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<Discography />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

  it('Verifica se ao rederizar a pagina a requisições são feitas e salvas no estado da aplicação', async () => {
    const { store } = renderWithReduxAndRouter(<Discography />, STATE);
    await waitFor(() => expect(global.fetch).toBeCalledTimes(1));

    expect(store.getState().albums).toEqual(albuns);
  });
});
