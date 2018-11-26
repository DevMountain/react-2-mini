import React from 'react';

// export default class ColorChanger extends Component {
//  render() {
// This is a stateless component function
export default function ColorChanger(props) {
    return (
      <select value={props.fontColor} onChange={props.onUpdate} className="dropDownContainer" disabled={!props.allow}>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    )
  }
