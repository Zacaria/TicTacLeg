import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Game from './containers/Game';

const App = () => (
  <Provider store={configureStore()}>
    <Game />
  </Provider>
);

export default App;
