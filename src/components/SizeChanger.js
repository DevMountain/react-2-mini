import React, { Component } from 'react';

export default class SizeChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer" onChange={ (e) => this.props.update(parseInt(e.target.value, 10)) } disabled={ !this.props.allowEdit }>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    )
  }
}