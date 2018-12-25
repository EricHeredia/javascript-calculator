import React, { Component } from 'react';
import './App.css';
import math from 'mathjs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: '0',
      numDisplay: '0',
      isOping: false,
      newTotal: ''
    }
    this.numberClick = this.numberClick.bind(this)
    this.operationClick = this.operationClick.bind(this)
    this.equalsClick = this.equalsClick.bind(this)
    this.decimalClick = this.decimalClick.bind(this)
    this.clearScreen = this.clearScreen.bind(this)
  }
  
  numberClick(e) {
    if (this.state.isOping && this.state.newTotal) {
      this.setState({
        display: this.state.display + e.target.innerHTML,
        numDisplay: e.target.innerHTML,
        isOping: false,
        newTotal: ''
      })
    } else if (this.state.display === '0' || this.state.newTotal) {
      this.setState({
        display: e.target.innerHTML,
        numDisplay: e.target.innerHTML,
        isOping: false,
        newTotal: ''
      })
    } else if (this.state.numDisplay.indexOf('.') !== -1) {
      this.setState({
        display: this.state.display + e.target.innerHTML,
        numDisplay: this.state.numDisplay + e.target.innerHTML,
        isOping: false,
        newTotal: '',
      })
    } else {
      this.setState({
        display: this.state.display + e.target.innerHTML,
        numDisplay: e.target.innerHTML,
        isOping: false,
        newTotal: ''
      })
    }
  }

  operationClick(e) {
    if (this.state.display === '0') {
      // Do nothing.
    } else if (this.state.newTotal && this.state.display !== '0') {
      this.setState({
        display: this.state.newTotal + e.target.innerHTML,
        isOping: true
      })
    } else if (this.state.display !== '0' && this.state.isOping === false) {
      this.setState({
        display: this.state.display + e.target.innerHTML,
        isOping: true
      })
    } else if (this.state.display[this.state.display.length - 1] !== e.target.innerHTML) {
      this.setState({
        display: this.state.display.slice(0, -1) + e.target.innerHTML
      })
    }
  }

  equalsClick(e) {
    if (this.state.display === '0') {
      this.clearScreen()
    } else if (this.state.display.indexOf('=') === -1 && !this.state.isOping) {
      const total = math.eval(this.state.display)
      this.setState({
        display: this.state.display + e.target.innerHTML + total,
        numDisplay: total,
        newTotal: total
      })
    }
  }

  decimalClick(e) {
    if (this.state.numDisplay.indexOf('.') === -1 && this.state.display === '0') {
      this.setState({
        display: e.target.innerHTML,
        numDisplay: e.target.innerHTML
      })
    } else {
      this.setState({
        display: this.state.display + e.target.innerHTML,
        numDisplay: this.state.numDisplay + e.target.innerHTML
      })
    }
  }

  clearScreen() {
    this.setState({
      display: '0',
      numDisplay: '0'
    })
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