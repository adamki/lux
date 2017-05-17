//@flow
export const applyMiddleware = (...middlewares) => store => {
  if (middlewares.length === 0) {
    return dispatch => dispatch;
  }
  if (middlewares.length === 1) {
    return middlewares[0];
  }
  const boundMiddlewares = middlewares.map(middleware =>
                                           middleware(store)
                                          );
  return boundMiddlewares.reduce((a, b) =>
                                 next => a(b(next))
                                );
};

export const delayMiddleware = () => next => action => {
  setTimeout(() => {
    next(action);
  }, 1000);
};

export const loggingMiddleware = ({getState}) => next => action => {
  console.info('before', getState());
  console.info('action', action);
  const result = next(action);
  console.info('after', getState());
  return result;
};
