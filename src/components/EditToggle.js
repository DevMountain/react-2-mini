import React from 'react';

export default function EditToggle(props) {
  return (
    <select 
      value={props.allowEdit ? 'true' : 'false'} 
      onChange={e => props.onUpdate(e.target.value === 'true')} 
      className="dropDownContainer"
    >
      <option value="true">Allow Edit</option>
      <option value="false">Disable Edit</option>
    </select>
  )
}