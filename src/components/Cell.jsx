import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ onClick, value }) => (
  <input type="checkbox" checked={value} onChange={onClick} />
);

Cell.propTypes = {
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

Cell.defaultProps = {
  value: false,
};

export default Cell;
