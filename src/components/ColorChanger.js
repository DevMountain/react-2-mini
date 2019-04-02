import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer">
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    );
  }
}
