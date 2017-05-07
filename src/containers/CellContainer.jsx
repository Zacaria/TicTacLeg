import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCellValue, isCellClickable } from '../redux';

import Cell from '../components/Cell';

class CellContainer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.isClickable) {
      this.props.dispatchClick();
    }
  }

  render() {
    const { value } = this.props;
    return <Cell onClick={this.handleClick} value={value} />;
  }
}

CellContainer.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  isClickable: PropTypes.bool.isRequired,

  dispatchClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { coordinates }) => ({
  value: getCellValue(state)(coordinates),
  isClickable: isCellClickable(state)(coordinates),
});

const mapDispatchToProps = (dispatch, { onClick, coordinates }) => ({
  dispatchClick: () => dispatch(onClick(coordinates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CellContainer);
