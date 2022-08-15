import styled from 'styled-components'

const HistoryTab = styled.div`
  padding: 20px;
  border-left: 3px solid #707070;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100vh;
`
const Title = styled.h2`
  margin: 0 auto;
  font: normal normal normal 32px/38px 'Kanit', sans-serif;
  margin-bottom: 20px;
`

const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const HistoryItem = styled.li`
  margin: 10px;
  font: normal normal normal 30px/36px 'Kanit', sans-serif;
  cursor: pointer;
  padding-top: 5px;
`

export { HistoryTab, Title, HistoryList, HistoryItem }
