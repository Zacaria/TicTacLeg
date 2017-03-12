import { combineReducers } from 'redux';

import game, * as fromGame from './modules/game';

const app = combineReducers({
  game,
});

export default app;

export const getCellValue = state => (coordinates) => {
  const gameState = fromGame.getGame(state);
  return fromGame.getCellValue(gameState)(coordinates);
};
