import React, { Component } from 'react';

// Components
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';
import EditToggle from './components/EditToggle';

class App extends Component {
  // constructor

  // updateColor

  // updateSize

  // updateFamily

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
          { /* Render EditToggle */ }
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
        </div>
      </div>
    )
  }
}

export default App;
