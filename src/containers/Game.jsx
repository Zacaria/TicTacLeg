import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from '../components/Grid';

import * as playersActions from '../redux/modules/players';
import * as shapes from '../shapes';

const Game = ({ current: { name }, setPlayers, players }) => (
  <div>
    <button onClick={() => setPlayers(players)}>Set players</button>
    <div>
      <div>Cross : {players.cross.name}</div>
      <div>Circle : {players.circle.name}</div>
    </div>
    <Grid />
    <div>Current dude <strong>{name}</strong></div>
  </div>
);

Game.propTypes = {
  setPlayers: PropTypes.func.isRequired,
  current: shapes.player.isRequired,
  players: shapes.players.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setPlayers: bindActionCreators(playersActions.setPlayers, dispatch),
});

const mapStateToProps = state => ({
  current: playersActions.getCurrentPlayer(state),
  players: playersActions.getPlayers(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
