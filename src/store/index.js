import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

export function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools()
  );
  return store;
}
