import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from './lib/provider';
import { createStore } from './lib/store';
import { reducer } from './lib/reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
