import { reducer } from './reducers';

export const validateAction = action => {
  if (!action || typeof action !== 'object' || Array.isArray(action)) {
    throw new Error('Action must be an Object');
  }
  if (!action.type) {
    throw new Error('Action must have a Type');
  }
};

export const createStore = () => {
  let state;
  const subscribers = [];
  const store = {
    dispatch: action => {
      validateAction(action);
      state = reducer(state, action);
      subscribers.forEach(handler => handler());
    },
    getState: () => state,
    subscribe: handler => {
      subscribers.push(handler);
      return () => {
        const index = subscribers.indexOf(handler);
        if (index > 0) {
          subscribers.splice(index, 1);
        }
      };
    }
  };

  store.dispatch({type: '@@redux/INIT'});
  return store;
};
