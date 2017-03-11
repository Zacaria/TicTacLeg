import React from 'react';

const Cell = ({onClick, value}) => {
  return (
    <div onClick={onClick}>
      {value}
    </div>
  )
};

Cell.propTypes = {
  value: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};

Cell.defaultProps = {
  value: '',
};

export default Cell;