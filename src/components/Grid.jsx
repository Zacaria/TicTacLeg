import React from 'react';

import CellContainer from '../containers/CellContainer';

const Grid = () => (
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
      <CellContainer coordinates={6} />
      <CellContainer coordinates={7} />
      <CellContainer coordinates={8} />
    </div>
  </div>
);

export default Grid;
