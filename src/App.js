import React, { Component } from 'react';

// Components
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';
import EditToggle from './components/EditToggle';

class App extends Component {
  // constructor
  constructor() {
    super()
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'times new roman',
      allowEdit: true
    }

    this.updateColor = this.updateColor.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateSize = this.updateSize.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
  }

  updateColor(event){
    this.setState({
      fontColor: event.target.value
    })
  }

  updateSize(event){
    this.setState({
      fontSize: parseInt(event.target.value, 10)
    })
  }

  updateFamily(event){
    this.setState({
      fontFamily : event.target.value
    })
  }

  updateEditStatus(status){
    this.setState({
      allowEdit : status
    })
  }

  render() {
    console.log(this.state)
    const { fontColor, fontSize, fontFamily, allowEdit } = this.state;
    return (
      <div>
        <div className="headerBar">
          <ColorChanger 
            fontColor={fontColor} 
            onUpdate={this.updateColor}
            allow={allowEdit}
          />
          <SizeChanger 
            fontSize={fontSize}
            onUpdate={this.updateSize}
            allow={allowEdit}
          />
          <FamilyChanger 
            fontFamily={fontFamily}
            onUpdate={this.updateFamily}
            allow={allowEdit}
          />
          <EditToggle 
            allowEdit={allowEdit}
            onUpdate={this.updateEditStatus}
          />
        </div>
        <div className="textArea">
          { <TextContainer 
              fontColor={fontColor}
              fontSize={fontSize}
              fontFamily={fontFamily}
              allow={allowEdit}
            /> }
        </div>
      </div>
    )
  }
}

export default App;
