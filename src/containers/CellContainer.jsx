import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getCellValue } from '../redux';
import { clickCell } from '../redux/modules/game';
import Cell from '../components/Cell';


class CellContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <Cell onClick={this.props.clickCell} value={this.props.value} />
    );
  }
}

CellContainer.propTypes = {
  clickCell: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  clickCell: () => dispatch(clickCell()),
});

const mapStateToProps = (state, { coordinates }) => ({
  value: getCellValue(state)(coordinates),
});

export default connect(mapStateToProps, mapDispatchToProps)(CellContainer);
