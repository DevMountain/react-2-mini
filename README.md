<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will create an application that can change the theme of a paragraph real-time using elements on the front-end. In the process we will cover how to use `this`, `bind`, `state`, `props`, and `componentWillReceiveProps`.

## Step 1

### Summary

In this step we will create the initial state for `App.js` and `TextContainer.js`.

### Instructions

* Open `App.js` ( `src/App.js` ) and `TextContainer.js` ( `src/components/TextContainer.js` )
* In `App.js`, create a constructor method where it says `// constructor`
  * Call `super()`
  * Create a `state` object with the following properties:
    * fontColor: 'black'
    * fontSize: 12,
    * fontFamily: 'monospace'
* In `TextContainer.js`, create a constructor method where it says `// constructor`
  * Call `super()`
  * Create a `state` object with the following properties:
    * fontColor: 'black',
    * fontSize: 12,
    * fontFamily: 'monospace'

### Solution

<details>

<summary> <code> App.js </code> </summary>

```jsx
constructor() {
  super();
  this.state = {
    fontColor: 'black',
    fontSize: 12,
    fontFamily: 'monospace'
  };
}
```

</details>

<details> 

<summary> <code> TextContainer.js </code> </summary>

```jsx
constructor() {
  super();
  this.state = {
    fontColor: 'black',
    fontSize: 12,
    fontFamily: 'monospace'
  };
}
```

</details>

## Step 2

### Summary

In this step we will create methods on `App.js` to update `fontColor`, `fontSize` and `fontFamily` on state. 

### Instructions

* Open `App.js` ( `src/App.js` )
* Create an updateColor method that takes a parameter called `val` where it says `// updateColor`
  * Use `setState` to update `fontColor` to `val`
* Create an updateSize method that takes a parameter called `val` where it says `// updateSize`
  * Use `setState` to update `fontSize` to `val`
* Create an updateFamily method that takes a parameter called `val` where it says `// updateFamily`
  * Use `setState` to update `fontFamily` to `val`

### Solution

<details>

<summary> <code> App.js </code> </summary>

```jsx
updateColor(val) {
  this.setState({ fontColor: val });
}

updateSize(val) {
  this.setState({ fontSize: val });
}

updateFamily(val) {
  this.setState({ fontFamily: val });
}
```

</details>

## Step 3

### Summary

In this step we will bind `this` to our methods in the `constructor` method in `App.js`.

### Instructions

* Open `App.js` ( `src/App.js` )
* Bind `this` to the three methods we just created: `updateColor`, `updateSize`, and `updateFamily` in the `constructor` method

### Solution

<details>

<summary> <code> App.js </code> </summary>

```jsx
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
```

</details>

## Step 4

### Summary

In this step we will `render` our `ColorChanger`, `FamilyChanger`, and `SizeChanger` components in `App.js` with an `update` prop.

### Instructions

* Open `App.js` ( `src/App.js` )
* Render the `ColorChanger` component where it says `{ /* Render ColorChange */ }`
  * Add a prop called `update` that is equal to the `updateColor` method
* Render the `SizeChanger` component where it says `{ /* Render SizeChanger */ }`
  * Add a prop called `update` that is equal to the `updateSize` method
* Render the `FamilyChanger` component where it says `{ /* Render FamilyChanger */ }`
  * Add a prop called `update` that is equal to the `updateFamily` method

### Solution

<details>

<summary> <code> App.js </code> </summary>

```jsx
<ColorChanger update={ this.updateColor } />
<SizeChanger update={ this.updateSize } />
<FamilyChanger update={ this.updateFamily } />
```

</details>

## Step 5

### Summary

In this step we will update our `select` elements in the `ColorChanger`, `FamilyChanger`, and `SizeChanger` components to use an `onChange` that calls the `update` prop with the value of the `select` element.

### Instructions

* Open `ColorChanger.js`, `FamilyChanger.js`, and `SizeChanger.js` from `src/components/`
* On the opening `select` tag, in all three files, add an `onChange` that uses an arrow function to capture the change event object
  * Inside the arrow function call the `update` prop with the value of the target 

### Solution

<details>

<summary> <code> ColorChanger.js </code> </summary>

```jsx
<select onChange={ (e) => { this.props.update(e.target.value) } }>
  <option value="black"> Black </option>
  <option value="blue"> Blue </option>
  <option value="green"> Green </option>
</select>
```

</details>

<details>

<summary> <code> FamilyChanger.js </code> </summary>

```jsx
<select onChange={ (e) => { this.props.update(e.target.value) } }>
  <option value="monospace"> Monospace </option>
  <option value="arial"> Arial </option>
  <option value="courier"> Courier </option>
</select>
```

</details>

<details>

<summary> <code> SizeChanger.js </code> </summary>

```jsx
<select onChange={ (e) => { this.props.update(parseInt(e.target.value, 10)) } }>
  <option value="12"> 12 </option>
  <option value="13"> 13 </option>
  <option value="14"> 14 </option>
</select>
```

</details>

## Step 6

### Summary 

In this step we will create a `componentWillReceiveProps` method that will update the `state` in `TextContainer.js`.

### Instructions

* Open `TextContainer.js` ( `src/components/TextContainer.js` )
* Add a `componentWillReceiveProps` method that takes a parameter called `props` where it says `// componentWillReceiveProps`
  * Using `setState` update the `fontColor`, `fontFamily`, and `fontSize` properties on state with the new `props`

### Solution

<details>

<summary> <code> TextContainer.js </code> </summary>

```jsx
componentWillReceiveProps(props) {
  this.setState({ fontColor: props.fontColor, fontFamily: props.fontFamily, fontSize: props.fontSize });
}
```

</details>

## Step 7 

### Summary

In this step we will `render` the `TextContainer` component in `App.js` with a `fontColor`, `fontSize`, and `fontFamily` prop equal to `fontColor`, `fontSize` and `fontFamily`'s value on `App.js`'s state.

### Instructions

* Open `App.js` ( `src/App.js` )
* Render the `TextContainer` component where it says `{ /* Render TextContainer */ }`
  * Add a `fontColor` prop that equals `fontColor` on state
  * Add a `fontSize` prop that equals `fontSize` on state
  * Add a `fontFamily` prop that equals `fontFamily` on state

### Solution

<details>

<summary> <code> App.js </code> </summary>

```jsx
<TextContainer fontColor={ this.state.fontColor } fontSize={ this.state.fontSize } fontFamily={ this.state.fontFamily } />
```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>