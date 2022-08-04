import styled from 'styled-components'

const KeypadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const KeypadRow = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
`

const KeypadLastRow = styled(KeypadRow)`
  grid-template-columns: repeat(3, 1fr);
  max-width: 410px;
`

const KeypadButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  font-size: 25px;
  cursor: pointer;
  margin: 15px 0;
`

const KeapadButtonEqual = styled(KeypadButton)`
  width: 190px;
`

export {
  KeypadContainer,
  KeypadButton,
  KeypadRow,
  KeapadButtonEqual,
  KeypadLastRow,
}
