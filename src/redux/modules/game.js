const DEFAULT_STATE = {
  cells: [false],
};

const CLICK_CELL = 'CLICK_CELL';

const game = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CLICK_CELL:
      return {
        cells: [!state.cells[0]],
      };
    default:
      return state;
  }
};

export default game;

export const clickCell = () => ({
  type: CLICK_CELL,
});

export const getGame = state => state.game;
export const getCellValue = state => coordinates => state.cells[coordinates];
