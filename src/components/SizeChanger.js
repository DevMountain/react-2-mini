import React from 'react';
import PropTypes from 'prop-types';

function SizeChanger(props) {
  return (
    <select className="dropDownContainer" onChange={ (e) => props.update(parseInt(e.target.value, 10)) } disabled={ !props.allowEdit }>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}

SizeChanger.propTypes = {
  update: PropTypes.func.isRequired,
  allowEdit: PropTypes.bool.isRequired
};

export default SizeChanger;
