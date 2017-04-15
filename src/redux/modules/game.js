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
      const cells = [...state.cells];
      cells[action.coordinates] = true;
      return {
        cells,
      };
    case INIT_GAME:
      return DEFAULT_GAME_STATE;
    default:
      return state;
  }
};

export default game;

export const clickCell = coordinates => ({
  type: CLICK_CELL,
  coordinates,
});

export const initGame = () => ({
  type: INIT_GAME,
});

export const getGame = state => state.game;
export const getCellValue = state => coordinates => state.cells[coordinates];
