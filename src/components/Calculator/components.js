import styled from 'styled-components'

const MainContainer = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 5px 15px;
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const HistoryButton = styled.button`
  background-color: #434343;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  padding: 5px;
  margin: 5px;
  max-width: 200px;

  &:hover {
    background-color: #b3b3b3;
  }
`

export { MainContainer, LeftSide, HistoryButton }
