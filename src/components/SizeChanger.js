import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" value={props.fontSize.toString()} onChange={ (e) => props.update( parseInt(e.target.value, 10) ) } disabled={!props.allowEdit}>
      <option value="12"> 12 </option>
      <option value="16"> 16 </option>
      <option value="24"> 24 </option>
    </select>
  )
}