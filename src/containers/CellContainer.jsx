import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getCellValue } from '../redux';
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
      <Cell onClick={this.props.onClick} value={this.props.value} />
    );
  }
}

CellContainer.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { coordinates }) => ({
  value: getCellValue(state)(coordinates),
});

export default connect(mapStateToProps)(CellContainer);
