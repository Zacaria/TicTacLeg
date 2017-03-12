import React from 'react';

const Cell = ({ onClick, value }) => (
  <input type="checkbox" checked={!!value} onClick={() => onClick(value)} />
);

Cell.propTypes = {
  value: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};

Cell.defaultProps = {
  value: '',
};

export default Cell;
