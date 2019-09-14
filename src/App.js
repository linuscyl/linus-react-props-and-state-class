import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './App.css';


import ClassPropComp from './ClassPropComp';

class App extends Component {

  constructor() {
    super()
    this.state = {
      isEmpty: true,
      count: 0,
      day: 0
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

  incrementDay() {
    this.setState({
      day: this.state.day + 1
    })
  }

  //prev state can also support first time. Therefore, recommended to use
  incrementDayP() {
    this.setState(prevState => ({
      day: prevState.day + 1
    }))
  }

  incrementDayFive() {
    this.incrementDayP()
    this.incrementDayP()
    this.incrementDayP()
    this.incrementDayP()
    this.incrementDayP()
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
        <hr />
        <h2>Day: {this.state.day}</h2>
        <div className="App-header">
          <button onClick={() => this.incrementDay()}>Press to increment + 1 (normal setState)</button>
          <button onClick={() => this.incrementDayP()}>Press to increment + 1 (by prevState)</button>
          <button onClick={() => this.incrementDayFive()}>Press to increment + 5</button>
        </div>
      </div>
    )
  }
}
export default App

ReactDOM.render(<App />, document.getElementById('root'));

