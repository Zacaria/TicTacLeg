import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from '../components/Grid';
import PlayerName from '../components/PlayerName';
import WinnerBlock from '../components/WinnerBlock';

import { getGrid, getWinner } from '../redux';
import * as gridActions from '../redux/modules/grid';
import * as playersActions from '../redux/modules/players';
import * as shapes from '../shapes';


const isCurrentPlayer = (currentPlayer, player) => currentPlayer.type === player.type;

class Game extends Component {
  componentDidUpdate() {
    const { currentPlayer, grid, winner, players } = this.props;
    if (!winner.type) {
      /*
        Here you get the player which it is not his turn.
        And check if this guys won.

        The problem is that here, the turn has already changed.
        You can't call next turn here because it triggers a new update.
        And this leads to and infinite loop !

        So I have to do the following :
        click a cell => create new grid in the state => change the current player
        And when this component has rerendered, check if the previous player won.

        Sorry.
       */
      players
        .filter(p => p.type !== currentPlayer.type)
        .map(p => this.props.checkWinner({ grid, player: p }));
    }
  }

  render() {
    const { currentPlayer, setPlayers, winner, players } = this.props;

    return (
      <div>
        <button onClick={() => setPlayers(players)}>Set players</button>
        <div>
          <div>Cross :
            <PlayerName bold={isCurrentPlayer(currentPlayer, players[0])} name={players[0].name} />
          </div>
          <div>Circle :
            <PlayerName bold={isCurrentPlayer(currentPlayer, players[1])} name={players[1].name} />
          </div>
        </div>
        {winner && winner.type && <WinnerBlock winner={winner} />}
        <Grid onClick={gridActions.clickCell(currentPlayer)} />
      </div>
    );
  }
}

Game.propTypes = {
  currentPlayer: shapes.player.isRequired,
  winner: shapes.player.isRequired,
  players: shapes.players.isRequired,
  grid: shapes.grid.isRequired,

  setPlayers: PropTypes.func.isRequired,
  checkWinner: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setPlayers: bindActionCreators(playersActions.setPlayers, dispatch),
  checkWinner: (grid, currentPlayer) => dispatch(playersActions.checkWinner(grid, currentPlayer)),
});

const mapStateToProps = state => ({
  currentPlayer: playersActions.getCurrentPlayer(state),
  players: playersActions.getPlayers(state),
  grid: getGrid(state),
  winner: getWinner(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
