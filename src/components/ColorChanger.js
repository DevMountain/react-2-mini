import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // componentWillReceiveProps
  componentWillReceiveProps(props){
    this.setState({ allowEdit: props.allowEdit });
  }

  render() {
    return (
      <select className="dropDownContainer" onChange={ (e) => this.props.update(e.target.value) } disabled={this.state.allowEdit === "false" }>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
        <option value="red"> Red </option>
        <option value="purple"> Purple </option>
        <option value="yellow"> Yellow </option>
        <option value="pink"> Pink </option>
      </select>
    )
  }
}