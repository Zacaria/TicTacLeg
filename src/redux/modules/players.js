import { combineReducers } from 'redux';
import { initGame, INIT_GAME } from './grid';
import resolveGrid from '../../helpers/resolveGrid';

const DEFAULT_GAME_STATE = [
  {
    name: 'Zac',
    type: 'cross',
  },
  {
    name: 'Gaël',
    type: 'circle',
  },
];

const DEFAULT_CURRENT_PLAYER = DEFAULT_GAME_STATE[0];

const SET_PLAYERS = 'SET_PLAYERS';
export const NEXT_PLAYER = 'NEXT_PLAYER';
const FOUND_WINNER = 'FOUND_WINNER';

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
      if (state === DEFAULT_GAME_STATE[0]) {
        return DEFAULT_GAME_STATE[1];
      }
      return DEFAULT_GAME_STATE[0];
    default:
      return state;
  }
};

const winner = (state = {}, action) => {
  switch (action.type) {
    case FOUND_WINNER:
      return action.winner;
    case INIT_GAME:
      return {};
    default:
      return state;
  }
};

const players = combineReducers({ list, current, winner });

export default players;

export const setPlayers = ([cross, circle]) => dispatch => {
  dispatch(initGame());

  return dispatch({
    type: SET_PLAYERS,
    payload: [cross, circle],
  });
};

export const nextPlayer = () => ({
  type: NEXT_PLAYER,
});

export const checkWinner = ({ grid, player }) => dispatch => {
  dispatch({
    type: 'CHECK_WINNER',
    grid,
    player,
  });

  const wins = resolveGrid({ grid, player });

  if (wins) {
    return dispatch({
      type: FOUND_WINNER,
      winner: player,
    });
  }
  // return nextPlayer();
};

export const getPlayers = state => state.players.list;

export const getCurrentPlayer = state => state.players.current;

export const getWinner = state => state.players.winner;
