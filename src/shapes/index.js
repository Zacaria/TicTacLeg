import PropTypes from 'prop-types';

export const player = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['cross', 'circle']),
});

export const players = PropTypes.arrayOf(player);

export const value = PropTypes.oneOf([PropTypes.string, PropTypes.bool]);

export const grid = PropTypes.arrayOf(value);
