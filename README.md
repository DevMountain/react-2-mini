<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project we will create an application that can change the theme of a paragraph real-time using elements on the front-end. We will also create a switch that can enable and disable the ability to change the theme of the paragraph. In the process of creating this project, we will cover how to use `this`, `bind`, `state`, and `props`.

# Live Example

<a href="https://devmountain.github.io/react-2-mini/">Click Me!</a>

<img src="https://github.com/DevMountain/react-2-mini/blob/solution/readme/1.png" />

## Setup

* `fork` and `clone` this repository.
* `cd` into the project directory.
* Run `npm install`.
* Run `npm start` after `npm install` has finished.

<img src="https://github.com/DevMountain/react-2-mini/blob/solution/readme/2.png" />

## Step 1

### Summary

In this step, we will create the initial state for `src/App.js`. On this state object, we will keep track of the initial theme values and if the theme is allowed to be edited.

### Instructions

* Open `src/App.js`.
* Create a `constructor` method where it says `// constructor`:
  * This method should call `super()`.
  * This method should create an initial state object with the following properties:
    * fontColor: 'black',
    * fontSize: 12,
    * fontFamily: 'monospace',
    * allowEdit: 'true'

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
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
      fontFamily: 'monospace',
      allowEdit: 'true'
    };
  }

  // updateColor

  // updateSize

  // updateFamily

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
        </div>
      </div>
    )
  }
}

export default App;
```

</details>

## Step 2

### Summary

In this step, we will create class methods in `src/App.js` to update `fontColor`, `fontSize`, `fontFamily`, and `allowEdit` on state. 

### Instructions

* Open `src/App.js`.
* Create an `updateColor` method that takes a parameter called `val` where it says `// updateColor`:
  * Use `setState` to update `fontColor` to `val`.
* Create an `updateSize` method that takes a parameter called `val` where it says `// updateSize`:
  * Use `setState` to update `fontSize` to `val`.
* Create an `updateFamily` method that takes a parameter called `val` where it says `// updateFamily`:
  * Use `setState` to update `fontFamily` to `val`.
* Create an `updateEditStatus` method that takes a parameter called `val` where it says `// updateEditStatus`:
  * Use `setState` to update `allowEdit` to `val`.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
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
      fontFamily: 'monospace',
      allowEdit: 'true'
    };
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

  updateEditStatus(val) {
    this.setState({ allowEdit: val });
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
        </div>
      </div>
    )
  }
}

export default App;
```

</details>

## Step 3

### Summary

In this step, we will bind `this` to our methods in the `constructor` method in `App.js`. We'll need to bind `this` on the `updateEditStatus`, `updateColor`, `updateSize`, and `updateFamily` methods.

### Instructions

* Open `src/App.js`.
* Bind `this` to the `updateColor`, `updateSize`, `updateFamily`, and `updateEditStatus` methods at the bottom of the `constructor` method.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
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
      fontFamily: 'monospace',
      allowEdit: 'true'
    };

    this.updateColor = this.updateColor.bind( this );
    this.updateSize = this.updateSize.bind( this );
    this.updateFamily = this.updateFamily.bind( this );
    this.updateEditStatus = this.updateEditStatus.bind( this );
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

  updateEditStatus(val) {
    this.setState({ allowEdit: val });
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
        </div>
      </div>
    )
  }
}

export default App;
```

</details>

## Step 4

### Summary

In this step, we will `render` our imported components in `App.js`.

### Instructions

* Open `src/App.js`.
* Render the `EditToggle` component where it says `{ /* Render EditToggle */ }`:
  * Add a prop called `update` that is equal to the `updateEditStatus` method.
* Render the `ColorChanger` component where it says `{ /* Render ColorChange */ }`:
  * Add a prop called `update` that is equal to the `updateColor` method.
  * Add a prop called `allowEdit` that is equal to the value of `allowEdit` on state.
* Render the `SizeChanger` component where it says `{ /* Render SizeChanger */ }`:
  * Add a prop called `update` that is equal to the `updateSize` method.
  * Add a prop called `allowEdit` that is equal to the value of `allowEdit` on state.
* Render the `FamilyChanger` component where it says `{ /* Render FamilyChanger */ }`:
  * Add a prop called `update` that is equal to the `updateFamily` method.
  * Add a prop called `allowEdit` that is equal to the value of `allowEdit` on state.
* Render the `TextContainer` component where it says `{ /* Render TextContainer */ }`:
  * Add a prop called `fontColor` that equals `fontColor` on state.
  * Add a prop called `fontSize` that equals `fontSize` on state.
  * Add a prop called `fontFamily` that equals `fontFamily` on state.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
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
      fontFamily: 'monospace',
      allowEdit: 'true'
    };

    this.updateColor = this.updateColor.bind( this );
    this.updateSize = this.updateSize.bind( this );
    this.updateFamily = this.updateFamily.bind( this );
    this.updateEditStatus = this.updateEditStatus.bind( this );
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

  updateEditStatus(val) {
    this.setState({ allowEdit: val });
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={ this.updateEditStatus } />
          <ColorChanger update={ this.updateColor } allowEdit={ this.state.allowEdit } />
          <SizeChanger update={ this.updateSize } allowEdit={ this.state.allowEdit } />
          <FamilyChanger update={ this.updateFamily } allowEdit={ this.state.allowEdit } />
        </div>
        <div className="textArea">
          <TextContainer 
            fontColor={ this.state.fontColor }
            fontSize={ this.state.fontSize }
            fontFamily={ this.state.fontFamily } />
        </div>
      </div>
    )
  }
}

export default App;
```

</details>

<br />

<img src="https://github.com/DevMountain/react-2-mini/blob/solution/readme/3.png" />

## Step 5

### Summary

In this step, we will update our `select` elements in the `EditToggle`, `ColorChanger`, `FamilyChanger`, and `SizeChanger` components to use an `onChange` that calls the `update` prop with the value of the `select` element. We will also disable the `select` element if the value of `allowEdit` is `"false"`.

### Instructions

* Open `EditToggle`, `ColorChanger.js`, `FamilyChanger.js`, and `SizeChanger.js` from `src/components/`.
* Locate the `select` tag, in all four files, and add an `onChange` prop:
  * The `onChange` should use an arrow function to capture the `event`. 
  * Inside the arrow function call the `update` prop with the value of the target from the `event`.
  * Parse Int the value of the target when in `SizeChanger.js`. 
* Locate the `select` tag, in `ColorChanger`, `FamilyChanger`, and `SizeChanger`, and add a `disabled` prop:
  * The `select` element should be `disabled` if `allowEdit` from <b>props</b> is equal to `"false"`.

### Solution

<details>

<summary> <code> src/components/EditToggle.js </code> </summary>

```jsx
return (
  <select className="dropDownContainer ml0" onChange={ (e) => this.props.update(e.target.value) }>
    <option value="true"> Allow Edit </option>
    <option value="false"> Disable Edit </option>
  </select>
)
```

</details>

<details>

<summary> <code> src/components/ColorChanger.js </code> </summary>

```jsx
return (
  <select className="dropDownContainer" onChange={ (e) => this.props.update(e.target.value) } disabled={ this.props.allowEdit === "false" }>
    <option value="black"> Black </option>
    <option value="blue"> Blue </option>
    <option value="green"> Green </option>
  </select>
)
```

</details>

<details>

<summary> <code> src/components/FamilyChanger.js </code> </summary>

```jsx
return (
  <select className="dropDownContainer" onChange={ (e) => this.props.update(e.target.value) } disabled={ this.props.allowEdit === "false" }>
    <option value="monospace"> Monospace </option>
    <option value="arial"> Arial </option>
    <option value="courier"> Courier </option>
  </select>
)
```

</details>

<details>

<summary> <code> src/components/SizeChanger.js </code> </summary>

```jsx
return (
  <select className="dropDownContainer" onChange={ (e) => this.props.update( parseInt(e.target.value) ) } disabled={ this.props.allowEdit === "false" }>
    <option value="12"> 12 </option>
    <option value="13"> 13 </option>
    <option value="14"> 14 </option>
  </select>
)
```

</details>

<br />

## Step 6

### Summary

Now we have everything set up to be able to edit the look of our text. Our last step is to connect our styling in the `TextContainer` components to the props being passed to it so they will reflect the changes we make. 

### Instructions

* Open `TextContainer.js` from `src/components/`.
* Bind the `updateText` method to `this` in the `constructor` method.
* In the `textarea` tag there is a `style` prop, this is where we need to add the styling that's being passed to this component through props. 
  * Uncomment the `style` prop.
  * Set `fontFamily`, `fontSize` and `color` equal to the appropriate props values.

### Solution

<details>

<summary> <code> src/components/TextContainer.js </code> </summary>

```jsx
import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="textContainer">
        <textarea 
          style={ { color: this.props.fontColor, fontFamily: this.props.fontFamily, fontSize: this.props.fontSize } }
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='This is where your text will be!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-2-mini/blob/solution/readme/2g.gif" />

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
