import React, { Component } from 'react'

class ClassPropComp extends Component {
  render() {
    return (
      <div>
        <h2>The props color is: {this.props.color}</h2>
      </div>
    )
  }
}

export default ClassPropComp
