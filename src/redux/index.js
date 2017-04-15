import { combineReducers } from 'redux';

import game, * as fromGame from './modules/game';
import players, * as fromPlayers from './modules/players';

const app = combineReducers({
  game,
  players,
});

export default app;

export const getCellValue = state => (coordinates) => {
  const gameState = fromGame.getGame(state);
  return fromGame.getCellValue(gameState)(coordinates);
};

export const getPlayers = state => fromPlayers.getPlayers(state);
