import React, { Component } from 'react';

export default class SizeChanger extends Component {
  render() {
    return (
      <div>
        <p> Font Size </p>
        <select onChange={ (e) => { this.props.update(parseInt(e.target.value, 10)) } }>
          <option value="12"> 12 </option>
          <option value="13"> 13 </option>
          <option value="14"> 14 </option>
        </select>
      </div>
    )
  }
}