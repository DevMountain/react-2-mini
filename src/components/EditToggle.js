import React from 'react';

export default function EditToggle(props) {
  return (
    <select className="dropDownContainer" value={props.allowEdit ? 'true' : 'false'} onChange={e => props.update(e.target.value === 'true')}>
      <option value="true">Allow Edit</option>
      <option value="false">Disable Edit</option>
    </select>
  )
}