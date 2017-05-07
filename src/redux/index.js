import { combineReducers } from 'redux';

import grid, * as fromGrid from './modules/grid';
import players, * as fromPlayers from './modules/players';

const app = combineReducers({
  grid,
  players,
});

export default app;

export const getGrid = state => state.grid;

export const getCellValue = state => coordinates => {
  const gridState = getGrid(state);
  return fromGrid.getCellValue(gridState)(coordinates);
};

export const isGameWon = state =>
  Object.keys(fromPlayers.getWinner(state)).length > 0;

export const isCellClickable = state => coordinates => {
  const cellValue = getCellValue(state)(coordinates);
  const isWon = isGameWon(state);
  return !cellValue && !isWon;
};

export const getPlayers = state => fromPlayers.getPlayers(state);

export const getWinner = state => fromPlayers.getWinner(state);
