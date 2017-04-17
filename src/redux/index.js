import { combineReducers } from 'redux';

import grid, * as fromGrid from './modules/grid';
import players, * as fromPlayers from './modules/players';

const app = combineReducers({
  grid,
  players,
});

export default app;

export const getCellValue = state => (coordinates) => {
  const gridState = fromGrid.getGrid(state);
  console.log(gridState);
  return fromGrid.getCellValue(gridState)(coordinates);
};

export const getPlayers = state => fromPlayers.getPlayers(state);
