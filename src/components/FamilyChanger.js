import React from 'react';
import PropTypes from 'prop-types';

const FamilyChanger = (props) => {
  return (
    <select className="dropDownContainer" onChange={ (e) => props.update(e.target.value) } disabled={ !props.allowEdit }>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="verdana"> Verdana </option>
    </select>
  )
}

FamilyChanger.propTypes = {
  update: PropTypes.func.isRequired,
  allowEdit: PropTypes.bool.isRequired
};

export default FamilyChanger;
