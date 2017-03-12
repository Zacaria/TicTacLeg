import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import CellContainer from './containers/CellContainer';

const onCellClick = coordinates => console.log('clicked :', coordinates);

const App = () => (
  <Provider store={configureStore()}>
    <CellContainer value={0} onClick={onCellClick} />
  </Provider>
);

export default App;
