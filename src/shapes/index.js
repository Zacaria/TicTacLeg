import PropTypes from 'prop-types';

export const player = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

export const players = PropTypes.shape({
  cross: player,
  circle: player,
});
