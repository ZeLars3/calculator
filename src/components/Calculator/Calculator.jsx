import { Component, Fragment } from 'react'

import { Display } from './Display'
import { History } from './History'
import { Keypad } from './Keypad'
import { ControlPanel } from './ControlPanel'
import { MainContainer, LeftSide } from './index'
import { calculatorLogic } from '../../utils/CalculatorCore'

const calculator = calculatorLogic()

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHistoryOpen: false,
      history: [],
      formula: [],
      input: '',
      result: '',
    }

    this.handleDigit = this.handleDigit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggleSign = this.handleToggleSign.bind(this)
    this.handleOperator = this.handleOperator.bind(this)
    this.handleDecimalPoint =
      this.handleDecimalPoint.bind(this)
    this.handleEqual = this.handleEqual.bind(this)
    this.handleHistoryClick =
      this.handleHistoryClick.bind(this)
  }

  handleDigit(number) {
    this.setState(prevState => ({
      input: prevState.input + number,
      formula: prevState.formula.concat(number),
    }))
  }

  handleClear() {
    this.setState({
      input: '',
      formula: [],
      result: '',
    })
  }

  handleDelete() {
    this.setState(prevState => ({
      input: prevState.input.slice(0, -1),
    }))
  }

  handleToggleSign() {
    this.setState(prevState => ({
      input:
        prevState.input.charAt(0) === '-'
          ? prevState.input.slice(1)
          : '-' + prevState.input,
    }))
  }

  handleOperator(operator) {
    const lastChar = this.state.input[this.state.input.length - 1]
    const isOperator = ['+', '-', '*', '/'].includes(lastChar)

    if (isOperator) {
      this.setState(prevState => ({
        input: prevState.input.slice(0, -1) + operator,
        formula: prevState.formula.concat(operator),
      }))
    } else {
      this.setState(prevState => ({
        input: prevState.input + operator,
        formula: prevState.formula.concat(operator),
      }))
    }
  }

  handleDecimalPoint() {
    if (!this.state.input.includes('.')) {
      this.setState(prevState => ({
        input: prevState.input + '.',
      }))
    }
  }

  handleEqual() {
    this.setState(prevState => ({
      history: [
        ...prevState.history,
        {
          input: prevState.input,
          result: prevState.result,
        },
      ],
      result: eval(prevState.input),
      input: '',
    }))
  }

  handleHistoryClick() {
    this.setState(prevState => ({
      isHistoryOpen: !prevState.isHistoryOpen,
    }))
  }

  render() {
    return (
      <Fragment>
        <MainContainer>
          <LeftSide>
            <ControlPanel
              onHistoryClick={this.handleHistoryClick}
            />
            <Display
              result={this.state.result}
              input={this.state.input}
            />
            <Keypad
              onDigit={this.handleDigit}
              onClear={this.handleClear}
              onDelete={this.handleDelete}
              onToggleSign={this.handleToggleSign}
              onOperator={this.handleOperator}
              onDecimalPoint={this.handleDecimalPoint}
              onEqual={this.handleEqual}
            />
          </LeftSide>
          {this.state.isHistoryOpen && (
            <History history={this.state.history} />
          )}
        </MainContainer>
      </Fragment>
    )
  }
}
