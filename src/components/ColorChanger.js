import React from 'react';

export default class ColorChanger {
  render() {
    return (
      <select className="dropDownContainer">
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    )
  }
}