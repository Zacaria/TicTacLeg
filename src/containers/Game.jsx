import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '../components/Grid';
import PlayerName from '../components/PlayerName';

import { clickCell } from '../redux/modules/game';
import * as playersActions from '../redux/modules/players';
import * as shapes from '../shapes';


const isCurrent = (current, player) => current.name === player.name;

const Game = ({ current, setPlayers, players }) => (
  <div>
    <button onClick={() => setPlayers(players)}>Set players</button>
    <div>
      <div>Cross :
        <PlayerName bold={isCurrent(current, players.cross)} name={players.cross.name} />
      </div>
      <div>Circle :
        <PlayerName bold={isCurrent(current, players.circle)} name={players.circle.name} />
      </div>
    </div>
    <Grid onClick={clickCell(current)} />
  </div>
);

Game.propTypes = {
  current: shapes.player.isRequired,
  players: shapes.players.isRequired,

  setPlayers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setPlayers: bindActionCreators(playersActions.setPlayers, dispatch),
});

const mapStateToProps = state => ({
  current: playersActions.getCurrentPlayer(state),
  players: playersActions.getPlayers(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
