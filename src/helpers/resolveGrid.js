const isInCells = (cells, player) => cells.filter(c => c === player).length === cells.length;

const hasRow = (grid, player) => {
  for (let j = 0; j < 9; j += 3) {
    const row = [grid[j], grid[j + 1], grid[j + 2]];
    if (isInCells(row, player)) return true;
  }
  return false;
};

const hasCol = (grid, player) => {
  for (let j = 0; j < 3; j += 1) {
    const col = [grid[j], grid[j + 3], grid[j + 6]];
    if (isInCells(col, player)) return true;
  }
  return false;
};

const hasDiag = (grid, player) => {
  const diag1 = [grid[0], grid[4], grid[8]];
  const diag2 = [grid[2], grid[4], grid[6]];

  return isInCells(diag1, player) || isInCells(diag2, player);
};

const resolve = ({ grid, player }) => (
  hasRow(grid, player.type) || hasCol(grid, player.type) || hasDiag(grid, player.type)
);


export default resolve;
