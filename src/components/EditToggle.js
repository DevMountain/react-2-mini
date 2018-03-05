import React from 'react';

export default function EditToggle() {
  return (
    <select className="dropDownContainer ml0">
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}