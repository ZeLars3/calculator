import {
  KeypadButton,
  KeypadContainer,
  KeypadRow,
  KeapadButtonEqual,
  KeypadLastRow,
} from './index'

export const Keypad = () => {
  return (
    <KeypadContainer>
      <KeypadRow>
        <KeypadButton>AC</KeypadButton>
        <KeypadButton>+/-</KeypadButton>
        <KeypadButton>%</KeypadButton>
        <KeypadButton>÷</KeypadButton>
      </KeypadRow>
      <KeypadRow>
        <KeypadButton>7</KeypadButton>
        <KeypadButton>8</KeypadButton>
        <KeypadButton>9</KeypadButton>
        <KeypadButton>x</KeypadButton>
      </KeypadRow>
      <KeypadRow>
        <KeypadButton>4</KeypadButton>
        <KeypadButton>5</KeypadButton>
        <KeypadButton>6</KeypadButton>
        <KeypadButton>-</KeypadButton>
      </KeypadRow>
      <KeypadRow>
        <KeypadButton>1</KeypadButton>
        <KeypadButton>2</KeypadButton>
        <KeypadButton>3</KeypadButton>
        <KeypadButton>+</KeypadButton>
      </KeypadRow>
      <KeypadLastRow>
        <KeypadButton>0</KeypadButton>
        <KeypadButton>.</KeypadButton>
        <KeapadButtonEqual>=</KeapadButtonEqual>
      </KeypadLastRow>
    </KeypadContainer>
  )
}
