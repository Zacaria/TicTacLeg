import React from 'react';

const Cell = ({ onClick, value }) => (
  <input type="checkbox" checked={value} onChange={onClick} />
);

Cell.propTypes = {
  value: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired,
};

Cell.defaultProps = {
  value: false,
};

export default Cell;
