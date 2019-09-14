import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './App.css';

import ClassPropComp from './ClassPropComp';

class App extends Component {

  constructor() {
    super()
    this.state = {
      isEmpty: true,
      count: 0
    }
  }

  changeIsEmpty() {
    this.setState({
      isEmpty: !this.state.isEmpty
    })
  }

  countPlusOne() {
    this.setState({
      count: this.state.count + 1
    })
  }

  //Normal Function
  resetCount() {
    this.setState({
      count: 0
    })
  }


  render() {
    return (
      <div>
        <h3>transfer props to ClassPropComp</h3>
        <ClassPropComp color="red" />
        <hr />
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.countPlusOne()}>Press to count + 1</button>
        <button onClick={() => this.resetCount()}>Reset Count</button>
        <hr />
        <h2>isEmpty? : {this.state.isEmpty.toString()}</h2>
        <button onClick={() => this.changeIsEmpty()}>Change is Empty</button>
      </div>
    )
  }
}
export default App

ReactDOM.render(<App />, document.getElementById('root'));

