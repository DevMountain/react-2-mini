import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" value={props.fontFamily} onChange={props.onUpdate} disabled={!props.allow}>
      <option value="times new roman"> Times New Roman </option>
      <option value="arial"> Arial </option>
      <option value="chalkduster"> Chalkduster </option>
    </select>
  )
}