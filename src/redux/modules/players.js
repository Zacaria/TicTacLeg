import { initGame } from './game';

const DEFAULT_GAME_STATE = {
  cross: {
    name: 'Zac',
  },
  circle: {
    name: 'Gael',
  },
};

const SET_PLAYERS = 'SET_PLAYERS';

const players = (state = DEFAULT_GAME_STATE, action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return action.payload;
    default:
      return state;
  }
};

export default players;

export const setPlayers = ({ cross, circle }) => (dispatch) => {
  dispatch(initGame());

  return dispatch({
    type: SET_PLAYERS,
    payload: { cross, circle },
  });
};

export const getPlayers = state => state.players;
