import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from '../components/Grid';

import * as playersActions from '../redux/modules/players';

const players = {
  cross: {
    name: 'Zac',
  },
  circle: {
    name: 'Gael',
  },
};

const Game = ({ setPlayers }) => (
  <div>
    <button onClick={() => setPlayers(players)}>Set players</button>
    <div>
      <div>Cross : {players.cross.name}</div>
      <div>Circle : {players.circle.name}</div>
    </div>
    <Grid />
  </div>
);

Game.propTypes = {
  setPlayers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setPlayers: bindActionCreators(playersActions.setPlayers, dispatch),
});

// const mapStateToProps = (state) => ({
//
// });

export default connect(null, mapDispatchToProps)(Game);
