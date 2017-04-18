import React from 'react';
import { player } from '../shapes/index';

const WinnerBlock = ({ winner }) => (
  <div>
    Winner found : {winner.type} {winner.name}
  </div>
);

WinnerBlock.propTypes = {
  ...player,
};

export default WinnerBlock;
