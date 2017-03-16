import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import CellContainer from './containers/CellContainer';

const App = () => (
  <Provider store={configureStore()}>
    <CellContainer coordinates={0}/>
  </Provider>
);

export default App;
