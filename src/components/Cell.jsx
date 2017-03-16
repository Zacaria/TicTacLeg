import React from 'react';

const Cell = ({ onClick, value }) => (
  <input type="checkbox" checked={value} onChange={(e) => onClick(value, e)} />
);

Cell.propTypes = {
  value: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired,
};

Cell.defaultProps = {
  value: '',
};

export default Cell;
