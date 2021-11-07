import { cleanup, screen } from '@testing-library/react';
import React from 'react';
import VideoList from '../../pages/VideosList';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import fetchMock from '../mocks/fetchMock';

describe('verifica a renderização e o funcionamento do componente VideoList', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetchMock);
  });

  afterEach(cleanup);

  it('verifica se o loading estiver ativo o spindle é renderizado', () => {
    renderWithReduxAndRouter(<VideoList />, { ...DEFAULT_STATE, loading: 1 });
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });
});
