import React from 'react';
import PropTypes from 'prop-types';

import CellContainer from '../containers/CellContainer';

const styles = {
  grid: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
};

const Grid = ({ onClick }) => (
  <div>
    <div style={styles.grid}>
      <CellContainer onClick={onClick} coordinates={0} />
      <CellContainer onClick={onClick} coordinates={1} />
      <CellContainer onClick={onClick} coordinates={2} />
    </div>
    <div style={styles.grid}>
      <CellContainer onClick={onClick} coordinates={3} />
      <CellContainer onClick={onClick} coordinates={4} />
      <CellContainer onClick={onClick} coordinates={5} />
    </div>
    <div style={styles.grid}>
      <CellContainer onClick={onClick} coordinates={6} />
      <CellContainer onClick={onClick} coordinates={7} />
      <CellContainer onClick={onClick} coordinates={8} />
    </div>
  </div>
);

Grid.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Grid;
