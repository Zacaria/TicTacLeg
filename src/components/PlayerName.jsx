import React from 'react';
import PropTypes from 'prop-types';

const PlayerName = ({ bold, name }) => {
  if (bold) {
    return <strong>{name}</strong>;
  }
  return <span>{name}</span>;
};

PlayerName.propTypes = {
  bold: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default PlayerName;
