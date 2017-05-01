import React, { Component } from 'react';

export default class SizeChanger extends Component {
  render() {
    return (
      <div>
        <p> Font Size </p>
        <select>
          <option value="12"> 12 </option>
          <option value="13"> 13 </option>
          <option value="14"> 14 </option>
        </select>
      </div>
    )
  }
}