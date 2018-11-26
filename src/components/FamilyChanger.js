import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" value={props.fontFamily} onChange={ (e) => props.update(e.target.value) } disabled={!props.allowEdit}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="times new roman"> Times New Roman </option>
    </select>
  )
}