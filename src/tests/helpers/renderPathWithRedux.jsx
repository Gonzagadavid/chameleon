import React from 'react';
import { render } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../App';
import getStore from './getStore';

const renderPathWithRedux = (path, initialState) => {
  const history = createBrowserHistory();
  history.push(path);
  const store = getStore(initialState);

  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    ),
    history,
    store,
  };
};

export default renderPathWithRedux;
