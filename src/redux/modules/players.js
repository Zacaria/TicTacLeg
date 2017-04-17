import { combineReducers } from 'redux';
import { initGame } from './grid';

const DEFAULT_GAME_STATE = {
  cross: {
    name: 'Zac',
  },
  circle: {
    name: 'Gaël',
  },
};

const DEFAULT_CURRENT_PLAYER = DEFAULT_GAME_STATE.cross;

const SET_PLAYERS = 'SET_PLAYERS';
export const NEXT_PLAYER = 'NEXT_PLAYER';

const list = (state = DEFAULT_GAME_STATE, action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return action.payload;
    default:
      return state;
  }
};

const current = (state = DEFAULT_CURRENT_PLAYER, action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return DEFAULT_CURRENT_PLAYER;
    case NEXT_PLAYER:
      if (state === DEFAULT_CURRENT_PLAYER) {
        return DEFAULT_GAME_STATE.circle;
      }
      return DEFAULT_GAME_STATE.cross;
    default:
      return state;
  }
};

const players = combineReducers(({ list, current }));

export default players;

export const setPlayers = ({ cross, circle }) => (dispatch) => {
  dispatch(initGame());

  return dispatch({
    type: SET_PLAYERS,
    payload: { cross, circle },
  });
};

export const nextPlayer = () => ({
  type: NEXT_PLAYER,
});

export const getPlayers = state => state.players.list;

export const getCurrentPlayer = state => state.players.current;
