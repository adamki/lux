import ReactDOM from 'react-dom';
import NoteAppContainer from './App';

import { createStore } from './lib/store';
import { reducer } from './lib/reducers';

const store = createStore(reducer);

ReactDOM.render(
  <NoteAppContainer store={store} />,
  document.getElementById('root')
);
