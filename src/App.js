import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'Monospace',
      allowEdit: true
    }

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  }

  updateColor(val) {
    this.setState({fontColor: val})
  }

  updateSize(val) {
    this.setState({fontSize: val})
  }

  updateFamiy(val) {
    this.setState({fontFamily: val})
  }

  updateEditStatus(val) {
    this.setState({allowEdit: val})
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus} />
          <ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit} />
          <SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit} />
          <FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily}
          />
        </div>
      </div>
    )
  }
}

export default App;
