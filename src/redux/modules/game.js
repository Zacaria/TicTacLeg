import { nextPlayer } from './players';

const DEFAULT_GAME_STATE = {
  cells: [
    false, false, false,
    false, false, false,
    false, false, false,
  ],
};

const CLICK_CELL = 'CLICK_CELL';
const INIT_GAME = 'INIT_GAME';

const game = (state = DEFAULT_GAME_STATE, action) => {
  switch (action.type) {
    case CLICK_CELL:
      return {
        cells: state.cells.map((cell, index) =>
          (index === action.coordinates ? true : cell),
        ),
      };
    case INIT_GAME:
      return DEFAULT_GAME_STATE;
    default:
      return state;
  }
};

export default game;

export const clickCell = coordinates => (dispatch) => {
  dispatch({
    type: CLICK_CELL,
    coordinates,
  });

  return dispatch(nextPlayer());
};

export const initGame = () => ({
  type: INIT_GAME,
});

export const getGame = state => state.game;
export const getCellValue = state => coordinates => state.cells[coordinates];
