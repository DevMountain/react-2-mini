import React from 'react';

export default function SizeChanger(props) {
  return (
    <select value={props.fontSize} onChange={props.onUpdate} className="dropDownContainer" disabled={!props.allow}>

      {/* In line function to make fontSize and actual number */}
      {/* onChange = {event => props.updateSize(parseInt(event.target.value), 10)} */}
      
      <option value="12"> 12 </option>
      <option value="16"> 16 </option>
      <option value="24"> 24 </option>
    </select>
  )
}