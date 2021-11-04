import { screen } from '@testing-library/react';
import React from 'react';
import Home from '../../pages/Home';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import fetchMock from '../mocks/fetchMock';

global.fetch = jest.fn(fetchMock);

describe('verifica a renderização dos componentes', () => {
  it('verifica os textos estão corretos', () => {
    renderWithReduxAndRouter(<Home />);

    const title = screen.getByRole('heading', { level: 1});
    const serchBar = screen.getByPlaceholderText(/search/i);
    const btn = screen.getByRole('button');

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Chameleon');
    expect(title).toContainHTML('img');
    expect(title.lastChild).toHaveAttribute('alt', 'chameleon');

    expect(serchBar).toBeInTheDocument();
    expect(serchBar.tagName).toBe('INPUT');

    expect(btn).toBeInTheDocument();
    expect(btn).toContainHTML('svg')
  
  });
});
