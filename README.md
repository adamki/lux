State management.

```
In your HOC:

import {connector} from 'lux-state'

mapStateToProps = state = ({
  someValue: state.someValue,
  anotherValue: state.anotherValue,
})

mapDispatchToProps = dispatch => ({
  someAction: () => dispatch(actionFunc())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(YourHOC)

```

```
in your `src/index`:

import { createStore } from './lib/store';
// can also import middleware here

const store = createStore(reducer, applyMiddleware(
  loggingMiddleware,
  thunkMiddleware,
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
```

heavily influenced by Zapier [engineering](https://zapier.com/engineering/how-to-build-redux/)

