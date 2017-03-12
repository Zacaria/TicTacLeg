const DEFAULT_STATE = {
  cells: ['default_value'],
};

const game = (state = DEFAULT_STATE) => state;

export default game;

export const getGame = state => state.game;
export const getCellValue = state => coordinates => state.cells[coordinates];
