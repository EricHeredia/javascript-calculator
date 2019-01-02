import React, { Component } from 'react'
import './App.css'
import update from 'immutability-helper'
import math from 'mathjs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: [],
      inputDisplay: ['0'],
      display: ['0'],
      currentNumber: []
    }
  }

  handleClick = (e) => {
    const value = e.target.getAttribute('value')
    const lastInput = this.state.input[this.state.input.length - 1]
    
    switch (value) {
      case 'clear':
        this.setState({
          input: [],
          inputDisplay: ['0'],
          display: ['0'],
          currentNumber: []
        })
        break
      case 'equals':
        this.calculateInput()
        break
      case '.':
      if(/[=]/.test(String(this.state.inputDisplay))) {
        this.setState({
          input: ['0', '.'],
          inputDisplay: ['0', '.'],
          display: ['0', '.'],
          currentNumber: ['0', '.']
        })
      } else if (!/[.]/.test(this.state.currentNumber)) {
            this.defaultInput(e)
          }
        break
      case '0':
        if (this.state.currentNumber.length > 0) {
          this.defaultInput(e)
        }
        break
      case '+':
      case '-':
      case '*':
      case '/':
        if (/[/*\-+]/.test(lastInput)) {
          const repInput = update(this.state.input, {
            $splice: [[this.state.input.length - 1, 1, value]]
          })
          this.setState({
            input: repInput,
            inputDisplay: repInput,
            display: repInput,
            currentNumber: []
          })
        } else if (this.state.currentNumber.length) {
          this.defaultInput(e)
        }
        break
      default:
        this.defaultInput(e)
        break
    }
  }

  defaultInput(e) {
    const value = e.target.getAttribute('value')
    if (/[/*\-+]/.test(value)) {
      const newInput = update(this.state.input, {
        $push: [value]
      })
      this.setState({
        input: newInput,
        inputDisplay: newInput,
        display: this.state.display,
        currentNumber: []
      })
    } else if (/[0-9]/.test(value) && /[=]/.test(this.state.inputDisplay)) {
      if (value === '0') {
        this.setState({
          input: [],
          inputDisplay: [value],
          display: [value],
          currentNumber: []
        })
      } else {
        this.setState({
        input: [value],
        inputDisplay: [value],
        display: [value],
        currentNumber: [value]
        })
      }
    } else if (value === '.' && this.state.currentNumber.length === 0) {
      const newInput = update(this.state.input, {
        $push: ['0' + value]
        })
        this.setState({
          input: newInput,
          inputDisplay: newInput,
          display: newInput,
          currentNumber: newInput
        })
    } else {
      const newInput = update(this.state.input, {
      $push: [value]
      })
      const newCurrentNumber = update(this.state.currentNumber, {
      $push: [value]
      })
      this.setState({
        input: newInput,
        inputDisplay: newInput,
        display: newCurrentNumber,
        currentNumber: newCurrentNumber
      })
    }
  }

  calculateInput = () => {
    let total = this.state.input.join('')
    if (total) {
      try {
        total = math.eval(total)
        total = math.format(total, {precision: 7})
        total = String(total)
        this.setState({
          input: [total],
          inputDisplay: this.state.input.join('') + '=' + total,
          display: [total],
          currentNumber: [total]
        })
      } catch (e) {
        this.setState({
          input: [],
          inputDisplay: this.state.input.join('') + '= Error',
          display: 'Error'
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div id="full-inputDisplay">
          <div>
            <p
              id="inputDisplay"
            >
            {this.state.inputDisplay}
            </p>
          </div>
  
          <div>
            <h1
              id="display"
            >
            {this.state.display}
            </h1>
          </div>
        </div>

        <div id='calcButtons'>
          <button
            id="clear"
            value="clear"
            onClick={this.handleClick}
          >
          AC
          </button>

          <button
            id="divide"
            value="/"
            onClick={this.handleClick}
          >
          /
          </button>

          <button
            id="multiply"
            value="*"
            onClick={this.handleClick}
          >
          *
          </button>

          <button
            id="seven"
            value="7"
            onClick={this.handleClick}
          >
          7
          </button>

          <button
            id="eight"
            value="8"
            onClick={this.handleClick}
          >
          8
          </button>

          <button
            id="nine"
            value="9"
            onClick={this.handleClick}
          >
          9
          </button>

          <button
            id="subtract"
            value="-"
            onClick={this.handleClick}
          >
          -
          </button>

          <button
            id="four"
            value="4"
            onClick={this.handleClick}
          >
          4
          </button>

          <button
            id="five"
            value="5"
            onClick={this.handleClick}
          >
          5
          </button>

          <button
            id="six"
            value="6"
            onClick={this.handleClick}
          >
          6
          </button>

          <button
            id="add"
            value="+"
            onClick={this.handleClick}
          >
          +
          </button>

          <button
            id="one"
            value="1"
            onClick={this.handleClick}
          >
          1
          </button>

          <button
            id="two"
            value="2"
            onClick={this.handleClick}
          >
          2
          </button>

          <button
            id="three"
            value="3"
            onClick={this.handleClick}
          >
          3
          </button>

          <button
            id="equals"
            value="equals"
            onClick={this.handleClick}
          >
          =
          </button>

          <button
            id="zero"
            value="0"
            onClick={this.handleClick}
          >
          0
          </button>

          <button
            id="decimal"
            value="."
            onClick={this.handleClick}
          >
          .
          </button>
        </div>
      </div>
    );
  }
}

export default App;