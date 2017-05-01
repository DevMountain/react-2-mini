import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  render() {
    return (
      <div>
        <p> Font Family </p>
        <select onChange={ (e) => { this.props.update(e.target.value) } }>
          <option value="monospace"> Monospace </option>
          <option value="arial"> Arial </option>
          <option value="courier"> Courier </option>
        </select>
      </div>
    )
  }
}