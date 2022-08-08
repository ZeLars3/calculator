import {
  KeypadButton,
  KeypadContainer,
  KeypadRow,
  KeapadButtonEqual,
  KeypadLastRow,
  FunctionsButton,
} from './index'

export const Keypad = props => {
  const handleOnDigit = e => {
    props.onDigit(e.target.value)
  }

  const handleOnOperator = e => {
    props.onOperator(e.target.value)
  }

  return (
    <KeypadContainer>
      <KeypadRow>
        <FunctionsButton
          value="clearAll"
          onClick={props.onClear}>
          AC
        </FunctionsButton>
        <FunctionsButton
          value="clear"
          onClick={props.onDelete}>
          C
        </FunctionsButton>
        <FunctionsButton
          value="sign"
          onClick={props.onToggleSign}>
          +/-
        </FunctionsButton>
        <FunctionsButton value="/" onClick={handleOnOperator}>
          ÷
        </FunctionsButton>
      </KeypadRow>
      <KeypadRow>
        <KeypadButton value={7} onClick={handleOnDigit}>
          7
        </KeypadButton>
        <KeypadButton value={8} onClick={handleOnDigit}>
          8
        </KeypadButton>
        <KeypadButton value={9} onClick={handleOnDigit}>
          9
        </KeypadButton>
        <FunctionsButton value="*" onClick={handleOnOperator}>
          x
        </FunctionsButton>
      </KeypadRow>
      <KeypadRow>
        <KeypadButton value={4} onClick={handleOnDigit}>
          4
        </KeypadButton>
        <KeypadButton value={5} onClick={handleOnDigit}>
          5
        </KeypadButton>
        <KeypadButton value={6} onClick={handleOnDigit}>
          6
        </KeypadButton>
        <FunctionsButton value="-" onClick={handleOnOperator}>
          -
        </FunctionsButton>
      </KeypadRow>
      <KeypadRow>
        <KeypadButton value={1} onClick={handleOnDigit}>
          1
        </KeypadButton>
        <KeypadButton value={2} onClick={handleOnDigit}>
          2
        </KeypadButton>
        <KeypadButton value={3} onClick={handleOnDigit}>
          3
        </KeypadButton>
        <FunctionsButton value="+" onClick={handleOnOperator}>
          +
        </FunctionsButton>
      </KeypadRow>
      <KeypadLastRow>
        <KeypadButton value={0} onClick={handleOnDigit}>
          0
        </KeypadButton>
        <KeypadButton
          value="."
          onClick={props.onDecimalPoint}>
          .
        </KeypadButton>
        <KeapadButtonEqual
          value="="
          onClick={props.onEqual}>
          =
        </KeapadButtonEqual>
      </KeypadLastRow>
    </KeypadContainer>
  )
}
