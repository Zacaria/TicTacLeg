import { nextPlayer } from './players';

const DEFAULT_GRID_STATE = [
    false, false, false,
    false, false, false,
    false, false, false,
];

const CLICK_CELL = 'CLICK_CELL';
const INIT_GAME = 'INIT_GAME';

const grid = (state = DEFAULT_GRID_STATE, action) => {
  switch (action.type) {
    case CLICK_CELL:
      return state.map((cell, index) =>
        (index === action.coordinates ? action.player.name : cell),
      );
    case INIT_GAME:
      return DEFAULT_GRID_STATE;
    default:
      return state;
  }
};

export default grid;

export const clickCell = player => coordinates => (dispatch) => {
  dispatch({
    type: CLICK_CELL,
    coordinates,
    player,
  });

  return dispatch(nextPlayer());
};

export const initGame = () => ({
  type: INIT_GAME,
});

export const getGrid = state => state.grid;
export const getCellValue = state => coordinates => state[coordinates];
