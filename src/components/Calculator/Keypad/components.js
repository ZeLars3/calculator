import styled from 'styled-components'

const KeypadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 10px 0;
`

const KeypadRow = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(5, 1fr);
`

const KeypadButton = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 32px;
  border: 1px solid #707070;
  font: normal normal normal 64px/77px 'Kanit', sans-serif;
  cursor: pointer;
  margin: 15px 0;

  &:hover {
    background: darkgray;
  }
`

const FunctionsButton = styled(KeypadButton)`
  background: #fed766;
  color: #fff;
`

export {
  KeypadContainer,
  KeypadButton,
  KeypadRow,
  FunctionsButton,
}
