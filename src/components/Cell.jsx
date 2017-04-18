import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  cell: {
    height: '20px',
    width: '20px',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
};

const Cell = ({ onClick, value }) => (
  <div onClick={onClick} style={styles.cell}>
    {value === 'circle' && 'o'}
    {value === 'cross' && 'x'}
  </div>
);

Cell.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onClick: PropTypes.func.isRequired,
};

Cell.defaultProps = {
  value: false,
};

export default Cell;
