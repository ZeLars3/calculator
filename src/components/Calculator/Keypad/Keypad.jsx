import PropTypes from 'prop-types'
import { Component } from 'react'

import {
  KeypadButton,
  KeypadContainer,
  KeypadRow,
  FunctionsButton,
  BracketButton,
  LastKeypadRow,
} from './index'

export class Keypad extends Component {
  constructor(props) {
    super(props)

    this.handleOnDigit = this.handleOnDigit.bind(this)
    this.handleOnOperator = this.handleOnOperator.bind(this)
  }

  handleOnDigit(e) {
    this.props.onDigit(e.target.value)
  }

  handleOnOperator(e) {
    this.props.onOperator(e.target.value)
  }

  render() {
    const {
      onDelete,
      onEqual,
      onDecimalPoint,
      onClear,
      onToggleSign,
    } = this.props

    return (
      <KeypadContainer>
        <KeypadRow>
          <FunctionsButton value="clear" onClick={onDelete}>
            C
          </FunctionsButton>
          <KeypadButton
            value={7}
            onClick={this.handleOnDigit}>
            7
          </KeypadButton>
          <KeypadButton
            value={8}
            onClick={this.handleOnDigit}>
            8
          </KeypadButton>
          <KeypadButton
            value={9}
            onClick={this.handleOnDigit}>
            9
          </KeypadButton>
          <FunctionsButton
            value="*"
            onClick={this.handleOnOperator}>
            x
          </FunctionsButton>
        </KeypadRow>
        <KeypadRow>
          <FunctionsButton
            value="-"
            onClick={this.handleOnOperator}>
            -
          </FunctionsButton>
          <KeypadButton
            value={4}
            onClick={this.handleOnDigit}>
            4
          </KeypadButton>
          <KeypadButton
            value={5}
            onClick={this.handleOnDigit}>
            5
          </KeypadButton>
          <KeypadButton
            value={6}
            onClick={this.handleOnDigit}>
            6
          </KeypadButton>
          <FunctionsButton
            value="/"
            onClick={this.handleOnOperator}>
            ÷
          </FunctionsButton>
        </KeypadRow>
        <KeypadRow>
          <FunctionsButton
            value="+"
            onClick={this.handleOnOperator}>
            +
          </FunctionsButton>
          <KeypadButton
            value={1}
            onClick={this.handleOnDigit}>
            1
          </KeypadButton>
          <KeypadButton
            value={2}
            onClick={this.handleOnDigit}>
            2
          </KeypadButton>
          <KeypadButton
            value={3}
            onClick={this.handleOnDigit}>
            3
          </KeypadButton>
          <KeypadButton value="=" onClick={onEqual}>
            =
          </KeypadButton>
        </KeypadRow>
        <LastKeypadRow>
          <KeypadButton value="." onClick={onDecimalPoint}>
            .
          </KeypadButton>
          <FunctionsButton
            value="clearAll"
            onClick={onClear}>
            CE
          </FunctionsButton>
          <FunctionsButton
            value="sign"
            onClick={onToggleSign}>
            +/-
          </FunctionsButton>
          <KeypadButton
            value={0}
            onClick={this.handleOnDigit}>
            0
          </KeypadButton>
          <BracketButton
            value="("
            onClick={this.handleOnOperator}>
            (
          </BracketButton>
          <BracketButton
            value=")"
            onClick={this.handleOnOperator}>
            )
          </BracketButton>
        </LastKeypadRow>
      </KeypadContainer>
    )
  }
}

Keypad.defaultProps = {
  onDigit: () => {},
  onOperator: () => {},
  onClear: () => {},
  onDelete: () => {},
  onToggleSign: () => {},
  onDecimalPoint: () => {},
  onEqual: () => {},
}

Keypad.propTypes = {
  onDigit: PropTypes.func,
  onOperator: PropTypes.func,
  onClear: PropTypes.func,
  onDelete: PropTypes.func,
  onToggleSign: PropTypes.func,
  onDecimalPoint: PropTypes.func,
  onEqual: PropTypes.func,
}
