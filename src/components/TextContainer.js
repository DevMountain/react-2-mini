import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { fontColor, fontSize, fontFamily } = this.props
    return (
      <div className="textContainer">
        <textarea 
          style={{ color: fontColor, fontSize: fontSize + 'px', fontFamily}}
          onChange={this.updateText}
          value={this.state.text}
          >
        </textarea>
      </div>
    )
  }
}




