import { act, screen } from '@testing-library/react';
import React from 'react';
import matchMediaPolyfill from 'mq-polyfill';
import userEvent from '@testing-library/user-event';
import Nav from '../../components/Nav';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import resizeTo from '../mocks/risizeTo';

matchMediaPolyfill(window);
window.resizeTo = resizeTo;
describe('verifica o componente Nav', () => {
  it('verifica o botão da nav em display pequeno', () => {
    renderWithReduxAndRouter(<Nav />);

    expect(screen.queryByRole('button')).toBeNull();

    act(() => window.resizeTo(360, 500));

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
    expect(screen.queryByRole('list')).toBeInTheDocument();
    expect(button.parentElement).toHaveProperty('className', 'Nav ');

    userEvent.click(button);
    expect(button.parentElement).toHaveProperty('className', 'Nav Nav-visible');
  });
});
