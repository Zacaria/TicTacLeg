import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getCellValue } from '../redux';
import { clickCell } from '../redux/modules/game';
import Cell from '../components/Cell';


class CellContainer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.props.value) {
      this.props.clickCell(this.props.coordinates);
    }
  }

  render() {
    const { value } = this.props;
    return (
      <Cell onClick={this.handleClick} value={value} />
    );
  }
}

CellContainer.propTypes = {
  clickCell: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  coordinates: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  clickCell: bindActionCreators(clickCell, dispatch),
});

const mapStateToProps = (state, { coordinates }) => ({
  value: getCellValue(state)(coordinates),
});

export default connect(mapStateToProps, mapDispatchToProps)(CellContainer);
