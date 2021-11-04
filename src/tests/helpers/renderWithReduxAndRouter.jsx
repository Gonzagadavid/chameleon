import React from 'react';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import getStore from './getStore';

const renderWithReduxAndRouter = (component, initialState) => {
  const history = createMemoryHistory();
  const store = getStore(initialState);
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>
          {component}
        </Router>
      </Provider>,
    ),
    history,
    store,
  };
};

export default renderWithReduxAndRouter;
