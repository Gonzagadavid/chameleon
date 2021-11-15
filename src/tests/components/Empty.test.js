import { cleanup, screen } from '@testing-library/react';
import React from 'react';
import Empty from '../../components/Empty';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';

describe('verifica a renderização e o funcionamento do componente Empty', () => {
  afterEach(cleanup);

  it('verifica se ao passar uma condição verdadeira o children é renderizado', () => {
    renderWithReduxAndRouter(<Empty condition><p>OK</p></Empty>);

    expect(screen.getByText(/ok/i)).toBeInTheDocument();
  });

  it('verifica se ao passar uma condição falsa o texto é renderizado', async () => {
    renderWithReduxAndRouter(<Empty condition={false}><p>OK</p></Empty>);
    const img = await screen.findByRole('img');
    expect(img).toBeInTheDocument();
  });
});
