import styled from 'styled-components'

export const KeypadContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 10px 0;
`

export const KeypadButton = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 32px;
  cursor: pointer;
  margin: 15px 0;
  border: 1px solid #707070;
  font: normal normal normal 64px/77px 'Kanit', sans-serif;

  &:hover {
    background: darkgray;
  }
`
