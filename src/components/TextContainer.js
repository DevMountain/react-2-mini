import React, { Component } from 'react';

export default class TextContainer extends Component {
  render() {
    return (
      <div className="textContainer">
        <p style={ { color: this.props.fontColor, fontFamily: this.props.fontFamily, fontSize: this.props.fontSize } }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur quam. Morbi eleifend sollicitudin orci nec condimentum. Vestibulum id efficitur nisi. Sed egestas venenatis metus a interdum. Morbi rutrum ullamcorper leo quis mattis. Mauris eu libero erat. Donec efficitur felis id accumsan tempus. Proin interdum lacus dui, et egestas diam viverra bibendum. Praesent ultrices augue ac leo rutrum, ac mattis sapien pretium.
          <br />
          <br />
          Sed nisl quam, eleifend nec auctor quis, aliquam id orci. Sed in aliquam lorem. Praesent convallis porttitor lobortis. Nam fringilla faucibus magna vitae pretium. Suspendisse potenti. Nam ornare tincidunt odio id maximus. Nunc orci ex, imperdiet eu lorem et, sollicitudin dapibus tortor. Integer lacinia, eros sagittis elementum tincidunt, felis felis finibus ipsum, eu lobortis ante dui sit amet urna. Nulla facilisi. Maecenas ac sem diam. Morbi nec lacinia dolor. Curabitur interdum, augue eget auctor aliquam, libero lectus sagittis lectus, eget finibus eros arcu ac sem. Vestibulum bibendum quis eros eget ullamcorper. Nullam nulla ipsum, tincidunt eget fringilla vel, volutpat eget risus. Suspendisse fermentum ipsum sed lorem tempus blandit. Fusce in mauris id lorem gravida condimentum non sed neque. Maecenas dolor enim, consectetur in accumsan vitae, fermentum non velit. Nunc lorem metus, finibus ac tristique sed, imperdiet vel neque. In at odio nec massa varius accumsan nec vel felis. Pellentesque rutrum lobortis iaculis. Aenean varius, arcu ut dignissim feugiat, justo ex consequat leo, eu dapibus orci justo at nunc. 
          <br />
          <br />
          In hac habitasse platea dictumst. Curabitur luctus ligula risus, id suscipit lacus lacinia ut. Integer nec sapien odio. Morbi ullamcorper nec orci vel bibendum. Vestibulum elementum pellentesque odio id lacinia. Integer eget neque mauris. Nulla ultrices auctor velit eu pharetra. Nullam a feugiat lacus, quis blandit enim. Suspendisse sed purus nec tortor interdum imperdiet. Morbi scelerisque pulvinar urna a accumsan. Duis diam turpis, dictum nec mi vel, rutrum eleifend enim. Aliquam convallis massa justo, non commodo turpis dictum eu. Maecenas ligula mauris, gravida vel tellus non, laoreet mattis dui. Morbi volutpat sagittis tempus. Phasellus non odio neque. Maecenas nunc justo, posuere lacinia efficitur et, efficitur in ipsum. 
          <br />
          <br />
          Vestibulum gravida laoreet orci, et varius arcu vestibulum vitae. Fusce congue, mi fringilla posuere gravida, nibh augue tempor elit, quis consequat est ligula quis magna. Sed sit amet lacus consectetur, sodales dui lacinia, viverra erat. Nullam auctor turpis in purus ultrices tristique. Aliquam lobortis sagittis quam non fermentum. Integer suscipit tortor justo, consectetur molestie justo ullamcorper sed. Cras lobortis congue erat, ut pretium orci porta nec. Nullam at viverra nulla. Nulla porta leo vitae neque eleifend tempus a eget elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas egestas neque a tincidunt ornare. Maecenas et massa sapien. Maecenas ultrices nisi elit, a vestibulum erat suscipit at.
        </p>
      </div>
    )
  }
}