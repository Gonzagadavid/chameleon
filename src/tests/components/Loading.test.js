import { screen } from '@testing-library/react';
import React from 'react';
import '../../components/Delayed';
import Loading from '../../components/Loading';
import { actionDiscography } from '../../redux/actions';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';

jest.mock('../../components/Delayed', () => (
  function DummyDelay({ waitBeforeShow, children }) {
    return (
      <div>
        {waitBeforeShow}
        {children}
      </div>
    );
  }
));

describe('veirifica o funcionamento do componente loading', () => {
  it('veirifica a renderização com loding ativo ', async () => {
    const { store } = renderWithReduxAndRouter(<Loading className="issoae"><p>teste</p></Loading>, { ...DEFAULT_STATE, loading: 1 });
    store.dispatch(actionDiscography([]));
    expect(screen.getByText(500)).toBeInTheDocument();
  });
});
