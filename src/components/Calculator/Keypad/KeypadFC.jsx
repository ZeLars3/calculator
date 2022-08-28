import PropTypes from 'prop-types'

import {
  KeypadButton,
  KeypadContainer,
  KeypadRow,
  FunctionsButton,
  BracketButton,
  LastKeypadRow,
} from './index'

export const KeypadFC = ({
  onDelete,
  onEqual,
  onDecimalPoint,
  onToggleSign,
  onClear,
  onDigit,
  onOperator,
}) => {
  const handleOnDigit = e => {
    onDigit(e.target.value)
  }

  const handleOnOperator = e => {
    onOperator(e.target.value)
  }

  return (
    <KeypadContainer>
      <KeypadRow>
        <FunctionsButton value="clear" onClick={onDelete}>
          C
        </FunctionsButton>
        <KeypadButton value={7} onClick={handleOnDigit}>
          7
        </KeypadButton>
        <KeypadButton value={8} onClick={handleOnDigit}>
          8
        </KeypadButton>
        <KeypadButton value={9} onClick={handleOnDigit}>
          9
        </KeypadButton>
        <FunctionsButton
          value="*"
          onClick={handleOnOperator}>
          x
        </FunctionsButton>
      </KeypadRow>
      <KeypadRow>
        <FunctionsButton
          value="-"
          onClick={handleOnOperator}>
          -
        </FunctionsButton>
        <KeypadButton value={4} onClick={handleOnDigit}>
          4
        </KeypadButton>
        <KeypadButton value={5} onClick={handleOnDigit}>
          5
        </KeypadButton>
        <KeypadButton value={6} onClick={handleOnDigit}>
          6
        </KeypadButton>
        <FunctionsButton
          value="/"
          onClick={handleOnOperator}>
          ÷
        </FunctionsButton>
      </KeypadRow>
      <KeypadRow>
        <FunctionsButton
          value="+"
          onClick={handleOnOperator}>
          +
        </FunctionsButton>
        <KeypadButton value={1} onClick={handleOnDigit}>
          1
        </KeypadButton>
        <KeypadButton value={2} onClick={handleOnDigit}>
          2
        </KeypadButton>
        <KeypadButton value={3} onClick={handleOnDigit}>
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
        <FunctionsButton value="clearAll" onClick={onClear}>
          CE
        </FunctionsButton>
        <FunctionsButton
          value="sign"
          onClick={onToggleSign}>
          +/-
        </FunctionsButton>
        <KeypadButton value={0} onClick={handleOnDigit}>
          0
        </KeypadButton>
        <BracketButton value="(" onClick={handleOnOperator}>
          (
        </BracketButton>
        <BracketButton value=")" onClick={handleOnOperator}>
          )
        </BracketButton>
      </LastKeypadRow>
    </KeypadContainer>
  )
}

KeypadFC.defaultProps = {
  onDigit: () => {},
  onOperator: () => {},
  onClear: () => {},
  onDelete: () => {},
  onToggleSign: () => {},
  onDecimalPoint: () => {},
  onEqual: () => {},
}

KeypadFC.propTypes = {
  onDigit: PropTypes.func,
  onOperator: PropTypes.func,
  onClear: PropTypes.func,
  onDelete: PropTypes.func,
  onToggleSign: PropTypes.func,
  onDecimalPoint: PropTypes.func,
  onEqual: PropTypes.func,
}
