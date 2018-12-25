import React, { Component } from 'react';
import './App.css';
import math from 'mathjs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: '0',
      numDisplay: '0',
      willClear: false,
      newTotal: null
    }
    this.clearScreen = this.clearScreen.bind(this)
    this.numberClick = this.numberClick.bind(this)
    this.operationClick = this.operationClick.bind(this)
    this.equalsClick = this.equalsClick.bind(this)
    this.decimalClick = this.decimalClick.bind(this)
  }

  clearScreen() {
    this.setState({
      display: '0',
      numDisplay: '0',
      willClear: false,
      newTotal: null
    })
  }

  numberClick(e) {
    if (this.state.display === '0') {
      this.setState({
        display: e.target.innerHTML,
        numDisplay: e.target.innerHTML
      })
    } else if (this.state.newTotal === 'has') {
      this.setState({hasDecimal: false})
    } else if (this.state.newTotal !== null) {
      this.setState({
        display: e.target.innerHTML,
        numDisplay: e.target.innerHTML,
        newTotal: null
      })
    } else if (this.state.willClear === true) {
      this.setState({
        display: this.state.display + e.target.innerHTML,
        numDisplay: e.target.innerHTML,
        willClear: false
      })
    } else {
      this.setState({
        display: this.state.display + e.target.innerHTML,
        numDisplay: this.state.numDisplay + e.target.innerHTML
      })
    }
  }
  //FIX THIS
  decimalClick(e) {
    if (this.state.hasDecimal === true) {
      this.setState({
        newTotal: "has"
      })
    } else {
      this.setState({
        hasDecimal: true
      })
      this.numberClick(e)
    }
  }

  operationClick(e) {
    if (this.state.display === '0') {
      this.setState({
        display: '0',
        hasDecimal: false
      })
    } else if (this.state.newTotal !== null) {
      this.setState({
        display: this.state.newTotal + e.target.innerHTML,
        numDisplay: this.state.newTotal,
        willClear: true,
        newTotal: null,
        hasDecimal: false
      })
    } else {
      this.setState({
        display: this.state.display + e.target.innerHTML,
        willClear: true,
        hasDecimal: false
      })
    }
  }

  equalsClick(e) {
    if (this.state.display === '0' || this.state.display.search('=') !== -1) {
      // Do nothing (turns off '=' button)
    } else {
      const total = math.eval(this.state.display)
      this.setState({
        display: this.state.display + e.target.innerHTML + total,
        numDisplay: total,
        newTotal: total,
        hasDecimal: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1
            id="display"
          >
          {this.state.display}
          </h1>
        </div>

        <div>
          <h1
            id="numDisplay"
          >
          {this.state.numDisplay}
          </h1>
        </div>

        <div>
          <button
            id="clear"
            onClick={this.clearScreen}
          >
          AC
          </button>

          <button
            id="divide"
            onClick={this.operationClick}
          >
          /
          </button>

          <button
            id="multiply"
            onClick={this.operationClick}
          >
          *
          </button>

          <button
            id="seven"
            onClick={this.numberClick}
          >
          7
          </button>

          <button
            id="eight"
            onClick={this.numberClick}
          >
          8
          </button>

          <button
            id="nine"
            onClick={this.numberClick}
          >
          9
          </button>

          <button
            id="subtract"
            onClick={this.operationClick}
          >
          -
          </button>

          <button
            id="four"
            onClick={this.numberClick}
          >
          4
          </button>

          <button
            id="five"
            onClick={this.numberClick}
          >
          5
          </button>

          <button
            id="six"
            onClick={this.numberClick}
          >
          6
          </button>

          <button
            id="add"
            onClick={this.operationClick}
          >
          +
          </button>

          <button
            id="one"
            onClick={this.numberClick}
          >
          1
          </button>

          <button
            id="two"
            onClick={this.numberClick}
          >
          2
          </button>

          <button
            id="three"
            onClick={this.numberClick}
          >
          3
          </button>

          <button
            id="equals"
            onClick={this.equalsClick}
          >
          =
          </button>

          <button
            id="zero"
            onClick={this.numberClick}
          >
          0
          </button>

          <button
            id="decimal"
            onClick={this.decimalClick}
          >
          .
          </button>
        </div>
      </div>
    );
  }
}

export default App;