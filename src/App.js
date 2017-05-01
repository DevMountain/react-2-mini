import React, { Component } from 'react';
import './App.css';

import ColorChanger from './components/ColorChanger'
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace'
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
  }

  updateColor(val) {
    this.setState({ fontColor: val });
  }

  updateSize(val) {
    this.setState({ fontSize: val });
  }

  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  render() {
    return (
      <div>
        <div>
          <ColorChanger update={ this.updateColor } />
          <SizeChanger update={ this.updateSize } />
          <FamilyChanger update={ this.updateFamily } />
        </div>
        <TextContainer fontColor={ this.state.fontColor } fontSize={ this.state.fontSize } fontFamily={ this.state.fontFamily } />
      </div>
    )
  }
}

export default App;
