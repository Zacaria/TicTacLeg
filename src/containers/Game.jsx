import React from 'react';

import CellContainer from './CellContainer';

const Game = () => (
  <div>
    <div>
      <CellContainer coordinates={0} />
      <CellContainer coordinates={1} />
      <CellContainer coordinates={2} />
    </div>
    <div>
      <CellContainer coordinates={3} />
      <CellContainer coordinates={4} />
      <CellContainer coordinates={5} />
    </div>
    <div>
      <CellContainer coordinates={7} />
      <CellContainer coordinates={8} />
      <CellContainer coordinates={9} />
    </div>

  </div>
);

export default Game;
