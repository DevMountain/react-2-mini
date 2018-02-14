import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ColorChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer" onChange={ (e) => this.props.update(e.target.value) } disabled={ !this.props.allowEdit }>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}

ColorChanger.propTypes = {
  update: PropTypes.func.isRequired,
  allowEdit: PropTypes.bool.isRequired
};

export default ColorChanger;
